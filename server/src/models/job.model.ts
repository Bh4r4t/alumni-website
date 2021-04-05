import mongoose, { Schema, Document } from 'mongoose';

const job: Schema = new Schema({
    title: { type: String, required: true },
    company_name: { type: String,required: true },
    experience_level_from: { type: Number, required:true },
    experience_level_to: { type: Number, required: true },
    location: { type: String, required: true },
    contact_email: { type: String, required: true },
    skills: { type: String, required: true },
    job_desc: { type: String, required: true },
    application_deadline: {type: Date, required:true}
});

export interface IJob extends Document{
    title: String,
    company_name: String,
    experience_level_from: Number,
    experience_level_to: Number,
    location: String,
    contact_email: String,
    skills: String,
    job_desc: String,
    application_deadline: Date
}

export default mongoose.model<IJob>('Job', job);

