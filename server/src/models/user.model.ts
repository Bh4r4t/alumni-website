import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
    isAdmin: boolean;
    basic_info: IUserBasicInfo;
    location_contact_info: IUserLocationContactInfo;
    professional_info: IUserProfessionalInfo;
    educational_info: Array<IUserEducationalInfo>;
    membership_type: String;
    attachments: Array<IUserAttachments>;
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

export enum e_profile_role {
    faculty = 'Faculty',
    alumnus = 'Alumnus',
    student = 'Student',
}
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

export interface IUserBasicInfoPrivacy {
    show_day_of_birth: String;
    show_year_of_birth: String;
    show_day_of_wedding: String;
    show_year_of_wedding: String;
}

export interface IUserContactInfoPrivacy {
    show_contact_num: String;
    show_email_id: String;
}

export interface IUserBasicInfo {
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

export interface IUserContactInfoSocial {
    website: String;
    facebook: String;
    linkedin: String;
    twitter: String;
    youtube: String;
    instagram: String;
}

export interface IUserLocationContactInfo {
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

export interface IUserProfessionalInfo {
    total_exp: Number;
    orgs: Array<{
        role: String;
        company: String;
        exp: Number;
        curr: Boolean;
        industry: String;
    }>;
}

export interface IUserEducationalInfo {
    editable: boolean;
    name_of_organization: String;
    start_date: Date;
    end_date: Date;
    degree_name: String;
    stream_name: String;
    score_obtained?: String;
}

export interface IUserAttachments {
    title: String;
    attachment_type: e_attach_type;
    attachement: String;
    show_on_profile: boolean;
}

const userSchema: Schema = new Schema({
    isAdmin: { type: Boolean, default: false, required: true },
    basic_info: {
        salutation: { type: String },
        first_name: String,
        last_name: String,
        nick_name: String,
        gender: { type: String },
        date_of_birth: { type: Date, trim: true },
        relationship_status: {
            type: String,
        },
        wedding_anniversary: { type: Date, trim: true },
        profile_role: { type: String },
        privacy_info: {
            show_day_of_birth: {
                type: String,
                default: e_privacy.all_members,
            },
            show_year_of_birth: {
                type: String,
                default: e_privacy.all_members,
            },
            show_day_of_weddingweddingyear: {
                type: String,
                default: e_privacy.all_members,
            },
            show_year_of_weddingyear: {
                type: String,
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
        alternative_email_id: [String],
        privacy_info: {
            show_contact_num: {
                type: String,
                default: e_privacy.all_members,
            },
            show_email_id: {
                type: String,
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
    professional_info: {
        total_exp: Number,
        prof_head: { type: String },
        skills: [String],
        roles: [String],
        industries: [String],
        orgs: [
            {
                role: String,
                company: String,
                exp: Number,
                curr: Boolean,
                industry: String,
            },
        ],
    },
    educational_info: [
        {
            editable: { type: Boolean, default: true },
            name_of_organization: { type: String },
            start_date: { type: Date },
            end_date: { type: Date },
            degree_name: { type: String },
            stream_name: { type: String },
            score_obtained: { type: String },
        },
    ],
    membership_type: {
        type: String,
        // default: e_membership,
        // TODO: update the default value
    },
    attachments: [
        {
            title: String,
            attachment_type: {
                type: String,
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
