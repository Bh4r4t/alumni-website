import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface Ipost extends Document {
    user_name: String;
    post_date: Date;
    avatar: String;
    content: String;
    likes?: [String] | Array<IUser>;
    comments?: [String] | Array<IUser>;
}

const postSchema = new Schema({
    user_name: String,
    post_date: Date,
    content: String,
    avatar: String,
    likes: [{ type: Schema.Types.ObjectId }],
    comments: [{ type: Schema.Types.ObjectId }],
});

export default mongoose.model<Ipost>('posts', postSchema, 'posts');
