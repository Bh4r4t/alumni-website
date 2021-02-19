import { Response, Request } from 'express';
export async function verifyInput(req: Request, res: Response, next: any) {
    try {
        console.log(req.body, typeof req.body);
        for (let key of Object.keys(req.body)) {
            if (key !== 'lastname') {
                if (req.body[key] === '') {
                    throw new Error();
                }
            }
        }
        next();
    } catch (error) {
        res.send({
            error: true,
            message: 'invalid inputs for register',
        });
    }
}
