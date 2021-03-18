import { Router } from 'express';
import { jwtpayload } from '../auth';
import verifyToken from '../auth/verifyToken';
import User from '../db/models/user.model';
import { e_request_admin } from '../db/models/requestToAdmin/pendingVerification.model';
import { createPendingRequest } from '../auth/utils';

const app = Router();

/**
 * @route           GET user/me
 * @description     returns basic info of current user
 * @access          Private
 */
app.get('/me', verifyToken, (req, res) => {
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
app.post('/update_me', verifyToken, (req, res) => {
    try {
        const payload: jwtpayload = res.locals.payload;
        res.send({ error: false, message: 'Yet to Implement' });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST user/remove_me
 * @description     Raise a request to admin to remove account
 * @access          Private
 */
app.post('/remove_me', verifyToken, async (req, res) => {
    try {
        const payload = res.locals.payload;
        await createPendingRequest(payload.id, e_request_admin.accountDeletion);
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

app.get('/:username', verifyToken, async (req, res) => {
    try {
        const users = User.find({});
        res.send(users);
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

export default app;
