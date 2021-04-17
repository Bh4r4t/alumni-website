import { Router, Request, Response } from 'express';
import verifyToken from 'src/auth/verifyToken';
import Job, { IJob } from '../models/job.model';

const app = Router();

app.get('/', async (_req: Request, res:Response) => {
    try {
        const allJobs = await Job.find(
            /*{ application_deadline: { $gte: new Date(Date.now()) } },
            [],
            {
                limit: 6,
                sort: {
                    application_deadline: 1, // asc on event date
                },
            }*/
        );
        if (!allJobs) {
            throw new Error('No jobs.');
        }
        const copyJobs = [...allJobs];
        res.send({ jobs:copyJobs });

        
    }
    catch (err){
        res.send({error:true,message:err.message});
    }
});

app.post('/create', async (req, res) => {
    try {
        await createjob(req.body);
        res.send({
            error: false,
            message: 'Successfuly created job.',
        });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});

async function createjob(jobInfo: any) {
    const jobentry: IJob = new Job({
        title: jobInfo.title,
        company_name: jobInfo.company_name,
        experience_level_from: jobInfo.experience_level_from,
        experience_level_to: jobInfo.experience_level_to,
        location: jobInfo.location,
        contact_email: jobInfo.contact_email,
        skills: jobInfo.skills,
        job_desc: jobInfo.job_desc,
        application_deadline: jobInfo.application_deadline,
        date_created: jobInfo.date_created
    } as IJob);
    return await jobentry.save();
}

export default app;
