import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
    isAdmin: boolean;
    basic_info: IUserBasicInfo;
    location_contact_info: IUserLocationContactInfo;
    professional_info: IUserProfessionalInfo;
    educational_info: IUserEducationalInfo;
    membership_type: String;
    attachments: IUserAttachments;
    registered_user: boolean;
    email: string;
    password: string;
    token: string;
}

export enum e_salutation {
    mr = 'Mr',
    ms = 'Ms',
    dr = 'Dr',
    prof = 'Prof',
    other = 'Other',
}

export enum e_gender {
    male = 'Male',
    female = 'female',
    not_disclose = 'Prefer not do disclose',
}

export enum e_relationship_status {
    married = 'Married',
    single = 'Single',
}

export enum e_profile_role {}
// TODO: update profile_role

export enum e_privacy {
    all_members = 'All Members',
    batchmates = 'Batch Mates',
    only_admin = 'Only Admin',
}

export enum e_member_type {}
// TODO: update membership_type

export enum e_attach_type {
    resume = 'Resume',
    matrimony_profile = 'Matrimony Profile',
    published_work = 'Published Work',
}

export interface IUserBasicInfoPrivacy extends Document {
    show_day_of_birth: string;
    show_year_of_birth: string;
    show_day_of_wedding: string;
    show_year_of_wedding: string;
}

export interface IUserContactInfoPrivacy extends Document {
    show_contact_num: string;
    show_email_id: string;
}

export interface IUserBasicInfo extends Document {
    salutation: string;
    first_name: String;
    middle_name: String;
    last_name: String;
    nick_name: String;
    gender: string;
    date_of_birth: Date;
    relationship_status: string;
    wedding_anniversary: Date;
    profile_role: string;
    privacy_info: IUserBasicInfoPrivacy;
    about_me: string;
}

export interface IUserContactInfoSocial extends Document {
    website: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    instagram: string;
}

export interface IUserLocationContactInfo extends Document {
    current_city: string;
    home_town: string;
    correspondance_address: string;
    correspondance_location: string;
    correspondance_postal_code: number;
    mobile_number: string;
    home_phone_number: string;
    work_phone_number: string;
    login_email_id: string; // unique id
    alternative_email_id: Types.Array<string>;
    privacy_info: IUserContactInfoPrivacy;
    social_profiles: IUserContactInfoSocial;
}

export interface IUserProfessionalInfo extends Document {
    role: string;
    company: string;
}

export interface IUserEducationalInfo extends Document {
    editable: boolean;
    name_of_organization: string;
    start_date: Date;
    end_date: Date;
    degree_name: string;
    score_obtained: string;
}

export interface IUserAttachments extends Document {
    title: string;
    attachment_type: e_attach_type;
    attachement: string;
    show_on_profile: boolean;
}

const userSchema: Schema = new Schema({
    isAdmin: { type: Boolean, default: false, required: true },
    basic_info: {
        salutation: { type: String, enum: Object.values(e_salutation) },
        first_name: String,
        middle_name: String,
        last_name: String,
        nick_name: String,
        gender: { type: String, enum: Object.values(e_gender) },
        date_of_birth: { type: Date, trim: true },
        relationship_status: {
            type: String,
            enum: Object.values(e_relationship_status),
        },
        wedding_anniversary: { type: Date, trim: true },
        profile_role: { type: String, enum: Object.values(e_profile_role) },
        privacy_info: {
            show_day_of_birth: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
            show_year_of_birth: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
            show_day_of_weddingweddingyear: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
            show_year_of_weddingyear: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
        },
        about_me: String,
    },
    location_contact_info: {
        current_city: String,
        home_town: String,
        correspondance_address: String,
        correspondance_location: String,
        correspondance_postal_code: Number,
        mobile_number: String,
        home_phone_number: String,
        work_phone_number: String,
        login_email_id: { type: String, required: true }, // unique id
        alternative_email_id: [String],
        privacy_info: {
            show_contact_num: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
            show_email_id: {
                type: String,
                enum: Object.values(e_privacy),
                default: e_privacy.all_members,
            },
        },
        social_profiles: {
            website: String,
            facebook: String,
            linkedin: String,
            twitter: String,
            youtube: String,
            instagram: String,
        },
    },
    professional_info: [{ role: String, company: String }],
    educational_info: [
        {
            editable: { type: Boolean, default: true },
            name_of_organization: { type: String, default: true },
            start_date: { type: Date, default: true },
            end_date: { type: Date, default: true },
            degree_name: { type: String, default: true },
            score_obtained: { type: String, default: true },
        },
    ],
    membership_type: {
        type: String,
        enum: Object.values(e_member_type),
        // default: e_membership,
        // TODO: update the default value
    },
    attachments: [
        {
            title: String,
            attachment_type: {
                type: String,
                enum: Object.values(e_attach_type),
            },
            attachement: String,
            show_on_profile: { type: Boolean, default: true },
        },
    ],
    registered_user: Boolean,
    email: String,
    password: String,
    token: String,
});

export default mongoose.model<IUser>('Users', userSchema);
