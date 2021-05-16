import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './auth/index';
import refreshToken from './auth/refresh_token';
import user from './routes/user';
import execCommittee from './routes/execCommittee';
import events from './routes/events';
import newsRoom from './routes/newsRoom';
import members from './routes/members';
import connectDB from './db/index';
import job from './routes/job';
import posts from './routes/posts';

dotenv.config();
const app = express();
app.use(cookieParser());

app.use('../uploads', express.static('uploads'));

// middleware
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json({ limit: '50mb' }));
// Bodyparser middleware
app.use(
    express.urlencoded({
        extended: true,
        limit: '50mb',
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
// events view routes
app.use('/events', events);
// newsroom view routes
app.use('/newsroom', newsRoom);
// jobs view routes
app.use('/jobs', job);
// members view routes
app.use('/members', members);

app.use('/posts', posts);

app.get('/', (_req: Request, res: Response) => {
    res.send({ error: false });
});

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`server is running at port:${process.env.PORT ?? 3000}`);
});
