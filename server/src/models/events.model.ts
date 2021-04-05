import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    event_date: Date;
    event_name: String;
    event_venue: String;
    event_description?: String;
    date_created: Date;
    created_by: String;
    created_by_id?: String;
    pending_req_id?: String;
}

const eventConfirmedSchema: Schema = new Schema({
    event_date: { type: Date, required: true },
    event_name: { type: String, required: true },
    event_venue: { type: String, required: true },
    event_description: String,
    date_created: { type: Date, required: true, default: Date.now() },
    created_by: { type: String, required: true },
    created_by_id: { type: String, required: true },
});

const eventPendingSchema: Schema = new Schema({
    event_date: { type: Date, required: true },
    event_name: { type: String, required: true },
    event_venue: { type: String, required: true },
    event_description: String,
    date_created: { type: Date, required: true, default: Date.now() },
    created_by: { type: String, required: true },
    created_by_id: { type: String, required: true },
    pending_req_id: { type: String, required:true},
});

export const eventConfirmed = mongoose.model<IEvent>(
    'events_confirmed',
    eventConfirmedSchema
);
export const eventPending = mongoose.model<IEvent>(
    'events_pending',
    eventPendingSchema
);
