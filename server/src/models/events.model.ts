import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    event_date: String;
    event_name: String;
    event_venue: String;
    event_description?: String;
    date_created: Number;
    created_by: String;
    created_by_id?: String;
    pending_req_id?: String;
    event_category: String;
    event_time: String;
    event_end_time: String;
    address: String;
}

const eventSchema: Schema = new Schema({
    event_date: { type: String, required: true },
    event_name: { type: String, required: true },
    event_venue: { type: String, required: true },
    event_description: String,
    date_created: { type: Number, required: true, default: Date.now() },
    created_by: { type: String, required: true },
    created_by_id: { type: String, required: true },
    event_category: { type: String },
    event_time: { type: String },
    event_end_time: { type: String },
    address: { type: String },
    pending: { type: Boolean, default: true, required: true },
});

export default mongoose.model<IEvent>('events', eventSchema, 'events');
