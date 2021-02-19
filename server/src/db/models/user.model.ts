import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
	first_name: string;
	last_name?: string;
	email: string;
	password: string;
	token?: string;
}

const userSchema = new Schema({
	first_name: { type: String, required: true },
	last_name: String,
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
	},
	password: { type: String, required: true },
    token: String,
});

export default mongoose.model<IUser>('Users', userSchema);
