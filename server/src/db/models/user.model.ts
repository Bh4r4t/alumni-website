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
    primary_email: String;
    password: String;
    status: String;
    token: String;
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
    show_day_of_birth: String;
    show_year_of_birth: String;
    show_day_of_wedding: String;
    show_year_of_wedding: String;
}

export interface IUserContactInfoPrivacy extends Document {
    show_contact_num: String;
    show_email_id: String;
}

export interface IUserBasicInfo extends Document {
    salutation: String;
    first_name: String;
    last_name: String;
    nick_name: String;
    gender: String;
    date_of_birth: Date;
    relationship_status: String;
    wedding_anniversary: Date;
    profile_role: String;
    privacy_info: IUserBasicInfoPrivacy;
    about_me: String;
}

export interface IUserContactInfoSocial extends Document {
    website: String;
    facebook: String;
    linkedin: String;
    twitter: String;
    youtube: String;
    instagram: String;
}

export interface IUserLocationContactInfo extends Document {
    current_city: String;
    home_town: String;
    correspondance_address: String;
    correspondance_location: String;
    correspondance_postal_code: number;
    mobile_number: String;
    home_phone_number: String;
    work_phone_number: String;
    login_email_id: String; // unique id
    alternative_email_id: Types.Array<String>;
    privacy_info: IUserContactInfoPrivacy;
    social_profiles: IUserContactInfoSocial;
}

export interface IUserProfessionalInfo extends Document {
    role: String;
    company: String;
}

export interface IUserEducationalInfo extends Document {
    editable: boolean;
    name_of_organization: String;
    start_date: Date;
    end_date: Date;
    degree_name: String;
    score_obtained: String;
}

export interface IUserAttachments extends Document {
    title: String;
    attachment_type: e_attach_type;
    attachement: String;
    show_on_profile: boolean;
}

const userSchema: Schema = new Schema({
    isAdmin: { type: Boolean, default: false, required: true },
    basic_info: {
        salutation: { type: String, enum: Object.values(e_salutation) },
        first_name: String,
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
        email_id: String,
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
    registered_user: { type: String, default: false },
    status: { type: String, default: 'pending' },
    primary_email: { type: String, unique: true }, // unique id
    password: String,
    token: String,
});

export default mongoose.model<IUser>('Users', userSchema);
