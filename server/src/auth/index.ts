import express, { Request, Response } from 'express';
import User from '../db/models/user.model';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import {
    genAccessToken,
    genRefreshToken,
    updateRefreshInDB,
    sendRefreshToken,
} from './tokens';
import verifyToken from './verifyToken';
import { validationResult } from 'express-validator';
import { signupValidation, signinValidation, createUser } from './utils';

const app = express.Router();
app.use(cookieParser());
app.use(express.json());

export interface jwtpayload {
    email: string;
}

/**
 * @route           POST auth/signup
 * @description     register a user
 * @access          Public
 */
app.post('/signup', signupValidation, async (req: Request, res: Response) => {
    try {
        const validationError = validationResult(req);
        if (!validationError.isEmpty) {
            res.status(400).json({
                code: 400,
                errors: validationError.mapped(),
            });
        }
        await User.find({
            'location_contact_info.login_email_id': req.body.email,
        }).then((docs) => {
            if (JSON.stringify(docs) !== '[]') {
                throw new Error('user already exists!');
            }
        });
        const hashedPassword = await bcrypt.hash(req.body.password, 6);
        await createUser(req.body, hashedPassword);
        res.send({
            error: false,
            message: `user:${
                req.body.first_name + ' ' + req.body.lastname
            }'s info successfully added into db!!`,
        });
    } catch (err) {
        console.log(err)
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST auth/signin
 * @description     signin a user
 * @access          Public
 */
app.post('/signin', signinValidation, async (req: Request, res: Response) => {
    try {
        const validationError = validationResult(req);
        if (!validationError.isEmpty) {
            res.status(400).json({
                code: 400,
                errors: validationError.mapped(),
            });
        }
        const instance = await User.find({
            'location_contact_info.login_email_id': req.body.email,
        }).then((docs) => {
            if (JSON.stringify(docs) === '[]') {
                throw new Error('user does not exist!');
            }
            return docs;
        });
        const checkPass = await bcrypt.compare(
            req.body.password,
            instance[0].password
        );
        if (checkPass === false) {
            throw new Error('email or password is invalid');
        }
        const payload: jwtpayload = {
            email: instance[0].location_contact_info.login_email_id,
        };
        // generate access and refresh tokens
        const accessToken = genAccessToken(payload);
        const refreshToken = genRefreshToken(payload);
        // put refresh_token into db
        updateRefreshInDB(refreshToken, instance);
        // send access and refresh tokens
        sendRefreshToken(res, refreshToken);
        res.send({
            accesstoken: accessToken,
            refreshtoken: refreshToken
        });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST auth/logout
 * @description     Logout request: removes cookie and saved token in Database.
 * @access          Public
 */
app.post('/logout', verifyToken, async (req, res) => {
    // remove token from database
    res.clearCookie('refreshtoken');
    // email is sent from the client
    try {
        await User.updateOne(
            { 'location_contact_info.login_email_id': res.locals.email },
            { token: undefined }
        ).then(() => res.send({ message: 'logged out!' }));
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

/**
 * @route           POST auth/refresh_token
 * @description     Refresh token to check for cookie and update the token in cookie as well as in database.
 * @access          Public
 */
app.post('/refresh_token', async (req, res) => {
    try {
        const token = req.cookies.refreshtoken;
        // console.log(req.cookies.refreshtoken);
        if (!token) {
            throw new Error('Please login first!');
        } else {
            const payload: jwtpayload = jwt.verify(
                token,
                process.env.REFRESH_TOKEN_SECRET as jwt.Secret
            ) as jwtpayload;
            const user = await User.find({
                'location_contact_info.login_email_id': payload.email,
            }).then((docs) => {
                if (Object.keys(docs).length === 0 || docs[0].token !== token) {
                    throw new Error('Please login first!');
                }
                return docs;
            });
            const pload: jwtpayload = {
                email: payload.email,
            } as jwtpayload;

            // create new access and refresh token
            const accessToken = genAccessToken(pload);
            const refreshToken = genRefreshToken(pload);
            // update refresh token in db
            updateRefreshInDB(refreshToken, user);
            sendRefreshToken(res, refreshToken);
            res.send({ token: accessToken });
        }
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

export default app;
