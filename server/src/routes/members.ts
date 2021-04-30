import express, { Request, Response } from 'express';
import verifyToken from '../auth/verifyToken';
import User, { IUser } from '../models/user.model';

const app = express.Router();

app.get('/all/:page', async (req: Request, res: Response) => {
    try {
        const resultsPerPage = 20;
        const page: number = (((req.params.page as unknown) as number) >= 0
            ? req.params.page
            : 0) as number;
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
app.get('/all_loc', async (_req: Request, res: Response) => {
    try {
        const locs = await User.distinct('location_contact_info.current_city');
        console.log(locs)
        res.send({ locs });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_loc', async (req: Request, res: Response) => {
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
app.get('/all_inst', async (_req: Request, res: Response) => {
    try {
        const institutes = await User.distinct(
            'educational_info.name_of_organization'
        );
        res.send({ institutes });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_inst', async (req: Request, res: Response) => {
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
app.get('/all_comps', async (_req: Request, res: Response) => {
    try {
        const comps = await User.distinct('professional_info.company');
        console.log(comps)
        res.send({ comps });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_comp', async (req: Request, res: Response) => {
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
app.get('/all_inds', async (_req: Request, res: Response) => {
    try {
        const inds = await User.distinct('professional_info.industry');
        console.log(inds)
        res.send({ inds });
    } catch (err) {
        res.send({ error: true, message: err.messagee });
    }
});

app.get('/search_by_inds', async (req: Request, res: Response) => {
    try {
        const users: Array<IUser> = await User.find({
            'professional_info.industry': req.body.industry,
        });
        res.send({ users: filterUserData(users) });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

// generale filter in searching at homepage of members
app.get('/search', async (req: Request, res: Response) => {
    try {
        console.log(req.query)
        if (req.query.name) {
            
            const user = await User.find({
                $or: [
                    {
                        'basic_info.first_name': {
                            $regex: (req.query.name as string).split(' ')[0],
                            $options: 'i',
                        },
                    },
                    {
                        'basic_info.second_name': {
                            $regex:
                                (req.query.name as string).split(' ')[1] === ''
                                    ? req.query.name
                                    : (req.query.name as string).split(' ')[1],
                            $options: 'i',
                        },
                    },
                ],
            });
            res.send({ user });
        }
        // course and year
        else if (req.query.course || req.query.year||req.query.stream) {
            if (req.query.course!=="" && req.query.year !== ""&&req.query.stream!=="") {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': req.query.course,
                    'educational_info.end_date': req.query.year,
                   'educational_info.stream_name':req.query.stream
                });
                res.send({ user });
            }
            else if(req.query.course==="" && req.query.year !== ""&&req.query.stream!=="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.end_date': req.query.year,
                   'educational_info.stream_name':req.query.stream
                    });
                    res.send({ user });
            }
            else if(req.query.course!=="" && req.query.year === ""&&req.query.stream!=="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': req.query.course,

                   'educational_info.stream_name':req.query.stream
                    });
                    res.send({ user });
            }
            else if(req.query.course!=="" && req.query.year !== ""&&req.query.stream==="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': req.query.course,

                    'educational_info.end_date': req.query.year,
                    });
                    res.send({ user });
            }
            else if(req.query.course==="" && req.query.year === ""&&req.query.stream!=="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                   'educational_info.stream_name':req.query.stream
                    });
                    res.send({ user });
            }
            else if(req.query.course==="" && req.query.year !== ""&&req.query.stream==="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.end_date': req.query.year,
                    });
                    res.send({ user });
            }
            else if(req.query.course!=="" && req.query.year === ""&&req.query.stream==="")
            {
                const user = await User.find({
                    'educational_info.name_of_organization': 'IIT Ropar',
                    'educational_info.degree_name': req.query.course,

                    });
                    res.send({ user });
            }

        }
        // location
        else if (req.query.city||req.query.state||req.query.country) {
            const user = await User.find({'location_contact_info.current_city':req.query.city});
            res.send({ user });
        }
        // company
        else if (req.query.company) {
            const user = await User.find({
                'professional_info.company': req.query.company,
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
