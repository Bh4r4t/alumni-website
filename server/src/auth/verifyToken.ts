import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

function verifyToken(req: Request) {
    const auth = req.headers['Authorization'] as String;
    if (!auth) {
        throw new Error('please login first!');
    }
    const token = auth.split(' ')[1];
    const email = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as jwt.Secret
    );
    return email;
}

export default verifyToken;
