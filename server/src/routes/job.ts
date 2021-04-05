import { Router, Request, Response } from 'express';
import verifyToken from 'src/auth/verifyToken';
import Job, { IJob } from '../models/job.model';

const app = Router();

app.get('/', async (_req, res) => {
    try {
        const allJobs = await Job.find();
        if (!allJobs) {
            throw new Error('No jobs.');
        }
        res.send({ allJobs });
        
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
        application_deadline: jobInfo.application_deadline
    } as IJob);
    return await jobentry.save();
}

export default app;
