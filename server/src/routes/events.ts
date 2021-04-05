import express, { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';
import { IEvent, eventConfirmed, eventPending } from '../models/events.model';
import verifyToken from '../auth/verifyToken';
import { createPendingRequest } from '../auth/utils';
import pendingVerificationModel from '../models/pendingVerification.model';

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
            const event = new eventConfirmed({
                event_date: req.body.event_date,
                event_name: req.body.event_name,
                event_venue: req.body.event_venue,
                event_description: req.body.event_description,
                created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                created_by_id: user._id,
            } as IEvent);
            await event.save();
        } else {
            const pending_req = await createPendingRequest(
                user._id,
                'create_event'
            );
            const event = new eventPending({
                event_date: req.body.event_date,
                event_name: req.body.event_name,
                event_venue: req.body.event_venue,
                event_description: req.body.event_description,
                created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                created_by_id: user._id,
                pending_req_id: pending_req._id,
            } as IEvent);
            await event.save();
        }
        res.send({ error: false, message: 'successfully added event!' });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// return only 3 confirmed events.
app.get('/conf_recent', async (_req: Request, res: Response) => {
    try {
        const events = await eventConfirmed.find(
            { event_date: { $gte: new Date(Date.now()) } },
            [],
            {
                limit: 3,
                sort: {
                    event_date: 1, // asc on event date
                },
            }
        );
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
        const events = await eventConfirmed.find();
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
        const events = await eventPending.find();
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
        const event_p = await eventPending.findById({ id: req.body._id });
        if (!event_p) {
            const event_c = await eventConfirmed.findById({ id: req.body._id });
            if (!event_c) {
                throw new Error(`No event with id: ${req.body._id}`);
            }
            if (user.isAdmin) {
                await eventPending.findByIdAndUpdate(
                    { id: req.body._id },
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
                    'create_event'
                );
                const newEvent = new eventPending({
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
                const newEvent = new eventConfirmed({
                    event_date: req.body.event_date ?? event_p.event_date,
                    event_name: req.body.event_name ?? event_p.event_name,
                    event_venue: req.body.event_venue ?? event_p.event_venue,
                    event_description:
                        req.body.event_description ?? event_p.event_description,
                    created_by: `${user.basic_info.first_name} ${user.basic_info.last_name}` as String,
                    created_by_id: user._id,
                } as IEvent);
                await newEvent.save();
                await eventPending.deleteOne({ _id: event_p._id });
            } else {
                await pendingVerificationModel.deleteOne({
                    _id: event_p.pending_req_id,
                });
                const pendingReq = await createPendingRequest(
                    user._id,
                    'create_event'
                );
                await eventPending.findByIdAndUpdate(
                    { id: req.body._id },
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

export default app;
