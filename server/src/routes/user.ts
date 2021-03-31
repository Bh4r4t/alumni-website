import { Router, Request, Response } from 'express';
import { jwtpayload } from '../auth';
import verifyToken from '../auth/verifyToken';
import User, { IUserEducationalInfo } from '../models/user.model';
import { e_request_admin } from '../models/requestToAdmin/pendingVerification.model';
import { createPendingRequest } from '../auth/utils';
import * as dotenv from 'dotenv';

const app = Router();
dotenv.config();

/**
 * @route           GET user/me
 * @description     returns basic info of current user
 * @access          Private
 */
app.get('/me', verifyToken, async (req: Request, res: Response) => {
    try {
        const payload: jwtpayload = res.locals.payload;
        const user = User.findOne({ _id: payload.id });
        res.send(payload);
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST user/update_me
 * @description     updates information sent from the frontend to database
 * @access          Private
 */
app.post('/update_me', verifyToken, async (req: Request, res: Response) => {
    try {
        const payload: jwtpayload = res.locals.payload;
        res.send({ error: false, message: 'Yet to Implement' });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST user/init_me_std
 * @description     initialize batch information of the students and alumnus profile type.
 * @access          Private
 */
app.post('/init_me_std', verifyToken, async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            primary_email: res.locals.payload.email,
        });
        if (!user) {
            throw new Error('No User exist with given credentials!');
        }
        user.basic_info.profile_role = req.body.profile_role;
        const edInfo: IUserEducationalInfo = {
            editable: false,
            name_of_organization: 'IIT Ropar',
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            degree_name: req.body.course,
            stream_name: req.body.stream,
        };
        user.educational_info.push(edInfo);
        await user.save();
        res.send({
            error: false,
            message: 'Successfully Added details into DB!',
        });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST user/remove_me
 * @description     Raise a request to admin to remove account
 * @access          Private
 */
app.post('/remove_me', verifyToken, async (req: Request, res: Response) => {
    try {
        const payload = res.locals.payload;
        await createPendingRequest(payload.id, e_request_admin.accountDeletion);
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

app.get('/:username', verifyToken, async (req: Request, res: Response) => {
    try {
        const users = User.find({});
        res.send(users);
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

export default app;
