import express, { Request, Response } from 'express';
import verifyToken from '../auth/verifyToken';
import User, { IUser } from '../models/user.model';

const app = express.Router();

app.get('/all/:page', verifyToken, async (req: Request, res: Response) => {
    try {
        const resultsPerPage = 20;
        const page: number = (
            (req.params.page as unknown as number) >= 0 ? req.params.page : 0
        ) as number;
        const users = await User.find({}, [], {
            limit: resultsPerPage,
            skip: resultsPerPage * page,
        });

        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// location wise
app.get('/all_loc', verifyToken, async (_req: Request, res: Response) => {
    try {
        const locs = await User.distinct('location_contact_info.current_city');
        console.log(locs);
        res.send({ locs });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_loc', verifyToken, async (req: Request, res: Response) => {
    try {
        const users: Array<IUser> = await User.find({
            'location_contact_info.current_city': req.body.current_city,
        });
        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// institute wise
app.get('/all_inst', verifyToken, async (_req: Request, res: Response) => {
    try {
        const institutes = await User.distinct(
            'educational_info.name_of_organization'
        );
        res.send({ institutes });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_inst', verifyToken, async (req: Request, res: Response) => {
    try {
        const users: Array<IUser> = await User.find({
            'professional_info.company': req.body.company,
        });
        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// company wise
app.get('/all_comps', verifyToken, async (_req: Request, res: Response) => {
    try {
        const comps = await User.distinct('professional_info.company');
        console.log(comps);
        res.send({ comps });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_comp', verifyToken, async (req: Request, res: Response) => {
    try {
        const users: Array<IUser> = await User.find({
            'professional_info.company': req.body.company,
        });
        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// industry wise
app.get('/all_inds', verifyToken, async (_req: Request, res: Response) => {
    try {
        const inds = await User.distinct('professional_info.industry');
        console.log(inds);
        res.send({ inds });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_inds', verifyToken, async (req: Request, res: Response) => {
    try {
        const users: Array<IUser> = await User.find({
            'professional_info.industry': req.body.industry,
        });
        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

app.get('/all_skills', verifyToken, async (_req: Request, res: Response) => {
    try {
        const skills = await User.distinct('professional_info.skills');
        res.send({ skills });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/all_roles', verifyToken, async (_req: Request, res: Response) => {
    try {
        const roles = await User.distinct('professional_info.roles');
        res.send({ roles });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

// generale filter in searching at homepage of members
app.get('/search', verifyToken, async (req: Request, res: Response) => {
    console.log('req.query: ', req.query);
    try {
        if (req.query.name) {
            const q_name = (req.query.name as string).trim();
            const user = await User.find({
                $or: [
                    {
                        'basic_info.first_name': {
                            $regex: q_name.split(' ')[0],
                            $options: 'i',
                        },
                    },
                    {
                        'basic_info.second_name': {
                            $regex:
                                q_name.split(' ').length > 1
                                    ? q_name.split(' ')[1]
                                    : q_name,
                            $options: 'i',
                        },
                    },
                ],
            });
            res.send({ user });
        }
        // course and year
        else if (req.query.course || req.query.year || req.query.stream) {
            if (
                req.query.course !== '' &&
                req.query.year !== '' &&
                req.query.stream !== ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': {
                        $regex: req.query.course,
                        $options: 'i',
                    },
                    'educational_info.end_date': {
                        $regex: req.query.year,
                        $options: 'i',
                    },
                    'educational_info.stream_name': {
                        $regex: req.query.stream,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course === '' &&
                req.query.year !== '' &&
                req.query.stream !== ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.end_date': {
                        $regex: req.query.year,
                        $options: 'i',
                    },
                    'educational_info.stream_name': {
                        $regex: req.query.stream,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course !== '' &&
                req.query.year === '' &&
                req.query.stream !== ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': {
                        $regex: req.query.course,
                        $options: 'i',
                    },

                    'educational_info.stream_name': {
                        $regex: req.query.stream,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course !== '' &&
                req.query.year !== '' &&
                req.query.stream === ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': {
                        $regex: req.query.course,
                        $options: 'i',
                    },

                    'educational_info.end_date': {
                        $regex: req.query.year,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course === '' &&
                req.query.year === '' &&
                req.query.stream !== ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.stream_name': {
                        $regex: req.query.stream,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course === '' &&
                req.query.year !== '' &&
                req.query.stream === ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.end_date': {
                        $regex: req.query.year,
                        $options: 'i',
                    },
                });
                res.send({ user });
            } else if (
                req.query.course !== '' &&
                req.query.year === '' &&
                req.query.stream === ''
            ) {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': {
                        $regex: req.query.course,
                        $options: 'i',
                    },
                });
                res.send({ user });
            }
        }
        // location
        else if (req.query.city || req.query.state || req.query.country) {
            const user = await User.find({
                'location_contact_info.current_city': {
                    $regex: req.query.city,
                    $options: 'i',
                },
            });
            res.send({ user });
        }
        // company
        else if (req.query.company) {
            const user = await User.find({
                'professional_info.company': {
                    $regex: req.query.company,
                    $options: 'i',
                },
            });
            res.send({ user });
        }
        // work experience
        else if (req.query.work_ex) {
            const user = await User.find({
                'professional_info.total_exp': { $gte: req.query.work_ex },
            });
            res.send({ user });
        }
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

export default app;

const filterUserData = (users: Array<IUser>) => {
    // TODO: yet to implement
    return users;
};
