import express from 'express';
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
import { verifyInput } from './helper';



const app = express.Router();
app.use(cookieParser());
app.use(express.json());


export interface jwtpayload {
	email: string;
}


// Signup request
app.post('/signup', async (req, res) => {
	try {
		const query = await User.find({ email: req.body.email }).then(
			(docs) => {
				if (JSON.stringify(docs) !== '[]') {
					throw new Error('user already exists!');
				}
			}
		);
		const hashedPassword = await bcrypt.hash(req.body.password, 6);
		const newUser = new User({ ...req.body, password: hashedPassword });
		newUser.save().then(() =>
			res.send({
				error: false,
				message: `user:${
					req.body.first_name + ' ' + req.body.lastname
				}'s info successfully added into db!!`,
			})
		);
	} catch (err) {
		res.send({ error: true, message: err.message });
	}
});



// Signin request
app.post('/signin', async (req, res) => {
	try {
		const instance = await User.find({ email: req.body.email }).then(
			(docs) => {
				if (JSON.stringify(docs) === '[]') {
					throw new Error('user does not exist!');
				}
				return docs;
			}
		);
		const checkPass = await bcrypt.compare(
			req.body.password,
			instance[0].password
		);
		if (checkPass === false) {
			throw new Error('email or password is invalid');
		}
		const payload: jwtpayload = {
			email: instance[0].email,
		};
		// generate access and refresh tokens
		const accessToken = genAccessToken(payload);
		const refreshToken = genRefreshToken(payload);
		// put refresh_token into db
		updateRefreshInDB(refreshToken, instance);
		// send access and refresh tokens
		sendRefreshToken(res, refreshToken);
		res.send({
			email: instance[0].email,
			firstname: instance[0].first_name,
		});
	} catch (err) {
		res.send({ error: true, message: err.message });
	}
});



// Logout request: removes cookie and saved token in Database.
app.post('/logout', async (req, res) => {
	// remove token from database
	res.clearCookie('refreshtoken');
	// email is sent from the client
	try {
		await User.updateOne(
			{ email: req.body.email },
			{ token: undefined }
		).then(() => res.send({ message: 'logged out!' }));
	} catch (err) {
		res.send({ error: true, message: err.message });
	}
});



// Refresh token to check for cookie and update the token in cookie as well as in database.
app.post('/refresh_token', async (req, res) => {
	try {
		const token = req.cookies.refreshtoken;
		if (!token) {
			throw new Error('Please login first!');
		} else {
			const payload: jwtpayload = jwt.verify(
				token,
				process.env.REFRESH_TOKEN_SECRET as jwt.Secret
			) as jwtpayload;
			const user = await User.find({
				email: payload.email,
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
			res.send({ email: payload.email, firstname: user[0].first_name });
		}
	} catch (err) {
		res.send({ error: true, message: err.message });
	}
});

export default app;
