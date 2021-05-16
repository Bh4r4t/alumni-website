import { Router, Request, Response } from 'express';
import verifyToken from 'src/auth/verifyToken';
import Job, { IJob } from '../models/job.model';

const app = Router();

app.get('/', async (_req: Request, res: Response) => {
    try {
        const allJobs = await Job.find(
           { application_deadline: { $gte: new Date(Date.now()) } },
            [],
            {
                sort: {
                    application_deadline: 1, // asc on event date
                },
            }
        );
        if (!allJobs) {
            throw new Error('No jobs.');
        }
        const copyJobs = [...allJobs];
        res.send({ jobs: copyJobs });


    }
    catch (err) {
        res.send({ error: true, message: err.message });
    }
});

app.post('/create', async (req, res) => {
    try {
        await createjob(req.body);
        res.send({
            error: false,
            message: 'Successfully created job.',
        });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

async function createjob(jobInfo: any) {
    const jobentry: IJob = new Job({
        title: jobInfo.title,
        company_name: jobInfo.company_name,
        job_type: jobInfo.job_type,
        experience_level: jobInfo.experience_level,
        job_location: jobInfo.location,
        contact_email: jobInfo.contact_email,
        skills: jobInfo.skills,
        job_desc: jobInfo.job_desc,
        application_deadline: jobInfo.application_deadline,
    } as IJob);
    return await jobentry.save();
}

app.get('/all_jobs', async (req, res) => {
    await Job.find((err, jobs) => {
        if (err) return res.send('Error')
        else {
            return res.send(jobs);
        }
    })
})

app.get('/search', async (req: Request, res: Response) => {
    try {
        console.log(req.query);
        const job_keywords = req.query.keywords as string
        if (req.query.keywords || req.query.location || req.query.company) {
            if (req.query.keywords !== '' && req.query.location !== '' && req.query.company !== '') {
                await Job.find({
                    title: req.query.keywords as string,
                    job_location: req.query.location as string,
                    company_name: req.query.company as string
                }, (err: any, job: any) => {
                    res.send({ job });
                });

            }
            else if (req.query.keywords === '' && req.query.location !== '' && req.query.company !== '') {
                await Job.find({
                    job_location: req.query.location as string,
                    company_name: req.query.company as string
                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
            else if (
                req.query.keywords !== '' &&
                req.query.location === '' &&
                req.query.company !== ''
            ) {
                await Job.find({
                    title: req.query.keywords as string,
                    company_name: req.query.company as string
                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
            else if (
                req.query.keywords !== '' &&
                req.query.location !== '' &&
                req.query.company === ''
            ) {
                await Job.find({
                    title: req.query.keywords as string,
                    job_location: req.query.location as string,

                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
            else if (
                req.query.keywords === '' &&
                req.query.location === '' &&
                req.query.company !== ''
            ) {
                await Job.find({
                    company_name: req.query.company as string

                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
            else if (
                req.query.keywords === '' &&
                req.query.location !== '' &&
                req.query.company === ''
            ) {
                console.log("Entered")
                await Job.find({
                    job_location: req.query.location as string,
                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
            else if (
                req.query.keywords !== '' &&
                req.query.location === '' &&
                req.query.company === ''
            ) {
                await Job.find({
                    title: req.query.keywords as string,
                }, (err: any, job: any) => {
                    res.send({ job });
                });
            }
        }
    }
    catch {
        console.log("Error")
    }
})


export default app;
