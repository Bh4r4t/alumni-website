import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './auth/index';
import refreshToken from './auth/refresh_token';
import user from './routes/user';
import execCommittee from './routes/execCommittee';
import events from './routes/events';
import connectDB from './db/index';

// const upload = multer();

dotenv.config();
const app = express();
app.use(cookieParser());

app.use('../uploads', express.static('uploads'));

// middleware
app.use(
    cors({
        origin: `http://localhost:${process.env.REACT_APP_SERVER_PORT}`,
        credentials: true,
    })
);

app.use(express.json());
// Bodyparser middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);

// connect db
connectDB(process.env.DBURL as string);

// auth routes
app.use('/auth', auth);
// refresh_token route
app.use('/refresh_token', refreshToken);
// user routes
app.use('/user', user);
// exec committee view routes
app.use('/execCommittee', execCommittee);
// events committee view routes
app.use('events', events);

app.get('/', (_req: Request, res: Response) => {
    res.send({ error: false });
});

app.listen(process.env.SERVER_PORT ?? 3000, () => {
    console.log(`server is running at port:${process.env.SERVER_PORT ?? 3000}`);
});
