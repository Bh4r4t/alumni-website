import express, { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';
import Events, { IEvent } from '../models/events.model';
import verifyToken from '../auth/verifyToken';
import { createPendingRequest } from '../auth/utils';
import pendingVerificationModel, {
    e_request_admin,
} from '../models/pendingVerification.model';

const app = express.Router();

// create a new event
app.post('/create', verifyToken, async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            primary_email: res.locals.payload.email,
        });
        if (!user) {
            throw new Error('User does not exist!');
        }
        if (user.isAdmin) {
            const event = new Events(({
                event_date: req.body.event_date,
                event_name: req.body.event_name,
                event_venue: req.body.event_venue,
                event_description: req.body.event_description,
                created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                created_by_id: user._id,
                event_category: req.body.event_category,
                event_time: req.body.event_time,
                event_end_time: req.body.event_end_time,
                address: req.body.address,
                pending: false,
            } as unknown) as IEvent);
            console.log(event);
            await event.save();
        } else {
            const pending_req = await createPendingRequest(
                user._id,
                e_request_admin.createEvent
            );
            const event = new Events({
                event_date: req.body.event_date,
                event_name: req.body.event_name,
                event_venue: req.body.event_venue,
                event_description: req.body.event_description,
                created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                created_by_id: user._id,
                pending_req_id: pending_req._id,
                event_category: req.body.event_category,
                event_time: req.body.event_time,
                event_end_time: req.body.event_end_time,
                address: req.body.address,
            } as IEvent);
            console.log(event);
            await event.save();
        }
        res.send({ error: false, message: 'successfully added event!' });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// return only 3 confirmed events.
app.get('/conf_recent', verifyToken, async (_req: Request, res: Response) => {
    try {
        const events = await Events.find({ pending: false }, [], {
            limit: 3,
            sort: {
                event_date: 1, // asc on event date
            },
        });
        const copy_events: any = [...events];
        copy_events.forEach((event: any) => {
            delete event.created_by_id;
            delete event.pending_req_id;
        });
        res.send({ events: copy_events });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// return all the confirmed events.
app.get('/confirmed', async (_req: Request, res: Response) => {
    try {
        const events = await Events.find({ pending: false });
        const copy_events = [...events];
        copy_events.forEach((event) => {
            delete event.created_by_id;
            delete event.pending_req_id;
        });
        res.send({ events: copy_events });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// return all the pending events.
app.get('/pending', verifyToken, async (_req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            primary_email: res.locals.payload.email,
            isAdmin: true,
        });
        if (!user) {
            throw new Error('Not Accessible by Moderator');
        }
        const events = await Events.find({ pending: true });
        const copy_events = [...events];
        res.send({ events: copy_events });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// update a particular event.
app.post('/update', verifyToken, async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            primary_email: res.locals.payload.email,
        });
        if (!user) {
            throw new Error('User does not exist!');
        }
        const event_p = await Events.findOne({
            pending: true,
            id: req.body._id,
        });
        if (!event_p) {
            const event_c = await Events.findOne({
                pending: false,
                id: req.body._id,
            });
            if (!event_c) {
                throw new Error(`No event with id: ${req.body._id}`);
            }
            if (user.isAdmin) {
                await Events.findOneAndUpdate(
                    { pending: true, id: req.body._id },
                    {
                        event_date: req.body.event_date ?? event_c.event_date,
                        event_name: req.body.event_name ?? event_c.event_name,
                        event_venue:
                            req.body.event_venue ?? event_c.event_venue,
                        event_description:
                            req.body.event_description ??
                            event_c.event_description,
                        created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                        created_by_id: user._id,
                    }
                );
            } else {
                const pendingReq = await createPendingRequest(
                    user._id,
                    e_request_admin.createEvent
                );
                const newEvent = new Events({
                    event_date: req.body.event_date,
                    event_name: req.body.event_name,
                    event_venue: req.body.event_venue,
                    event_description: req.body.event_description,
                    created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                    created_by_id: user._id,
                    pending_req_id: pendingReq._id,
                } as IEvent);
                await newEvent.save();
            }
        } else {
            if (user.isAdmin) {
                const newEvent = new Events(({
                    pending: false,
                    event_date: req.body.event_date ?? event_p.event_date,
                    event_name: req.body.event_name ?? event_p.event_name,
                    event_venue: req.body.event_venue ?? event_p.event_venue,
                    event_description:
                        req.body.event_description ?? event_p.event_description,
                    created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                    created_by_id: user._id,
                } as unknown) as IEvent);
                await newEvent.save();
                await Events.deleteOne({ pending: true, _id: event_p._id });
            } else {
                await pendingVerificationModel.deleteOne({
                    _id: event_p.pending_req_id,
                });
                const pendingReq = await createPendingRequest(
                    user._id,
                    e_request_admin.createEvent
                );
                await Events.findOneAndUpdate(
                    { pending: true, id: req.body._id },
                    {
                        event_date: req.body.event_date ?? event_p.event_date,
                        event_name: req.body.event_name ?? event_p.event_name,
                        event_venue:
                            req.body.event_venue ?? event_p.event_venue,
                        event_description:
                            req.body.event_description ??
                            event_p.event_description,
                        created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                        created_by_id: user._id,
                        pending_req_id: pendingReq._id,
                    }
                );
            }
        }
        if (!user) {
            throw new Error('User does not exist!');
        }
        res.send({ error: false, message: 'successfully updated event!' });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

app.get('/event_description', verifyToken, async (req, res) => {
    Events.findById(req.query.id, (err: any, event: any) => {
        if (err) return res.send("Error in getting event details")
        else {
            return res.json(event)
        }
    })
})

app.post('/confirm_event', verifyToken, async (req, res) => {
    console.log(req.body.id)
    Events.findById(req.body.id, (err: any, event: any) => {
        if (err) res.send("Error in getting event details")
        else {
            event.pending = false;
            event.save()
                .then((response:any) => res.send("success"))
                .then((err:any) => res.send('error'))
        }
    })
})

app.post('/cancel_event', verifyToken, async (req, res) => {
    Events.findByIdAndDelete(req.body.id, [] ,(err: any, event: any) => {
        if (err) res.send("Error in getting event details")
        else {
            res.send("success")

        }
    })
})

export default app;
