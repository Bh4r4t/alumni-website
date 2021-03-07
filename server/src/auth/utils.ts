import { check } from 'express-validator';
import { Response } from 'express';
import User from '../db/models/user.model';
import passport from 'passport';

export function generateError(
    res: Response,
    code: number,
    error: any,
    msg: String,
    location = 'server'
) {}

export const signupValidation = [
    check('email')
        .exists()
        .withMessage('Email is empty!')
        .isEmail()
        .withMessage('invalid email'),
    check('password')
        .exists()
        .withMessage('Empty Password')
        .isLength({ min: 8 })
        .withMessage('Password length must be more than 8'),
];

export const signinValidation = [
    check('email')
        .exists()
        .withMessage('Email is empty!')
        .isEmail()
        .withMessage('invalid email'),
    check('password')
        .exists()
        .withMessage('Empty Password')
        .isLength({ min: 5 })
        .withMessage('Password length must be more than 8'),
];

export async function createUser(body: any, password: string) {
    const newUser = new User();
    newUser.basic_info.first_name = body.first_name;
    newUser.basic_info.last_name = body.last_name;
    newUser.location_contact_info.login_email_id = body.email;
    newUser.email = body.email;
    newUser.password = password;
    return newUser.save();
}
