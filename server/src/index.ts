import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import auth from './auth/index';
import user from './routes/user';
import connectDB from './db/index';

dotenv.config();
const app = express();
app.use(cookieParser());

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
// user routes
app.use('/user', user);

app.get('/', (req, res) => {
    res.send({ error: false });
});

app.listen(process.env.SERVER_PORT ?? 3000, () => {
    console.log(`server is running at port:${process.env.SERVER_PORT ?? 3000}`);
});
