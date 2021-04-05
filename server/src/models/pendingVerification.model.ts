import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPendingVerification extends Document {
    userId: String;
    dateCreated: Date;
    requestType: String;
}

export enum e_request_admin {
    accountRegisteration = 'register_account',
    accountDeletion = 'delete_account',
    createEvent = 'create_event',
}

const pendingVericationSchema: Schema = new Schema({
    userId: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() },
    requestType: {
        type: String,
        enum: Object.values(e_request_admin),
        default: e_request_admin.accountRegisteration,
    },
});

export default mongoose.model<IPendingVerification>(
    'PendingVerification',
    pendingVericationSchema
);