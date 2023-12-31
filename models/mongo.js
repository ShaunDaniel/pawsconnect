import mongoose from "mongoose";

// Schema for pet collection
const PetSchema = {
    p_name: {
        type:String,
        required: true
    },
    type: {
        type:String,
        enum: ['dog','cat'],
        required: true
    },
    sex:{
        type:String,
        enum: ['m','f'],
        required: true
    },
    age_m: {
        type:Number,
        required: true
    },
    age_y: {
        type:Number,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    vaccinated: {
        type:Boolean,
        required: true
    },
    dewormed: {
        type:Boolean,
        required: true
    },
    status: {
        type:String,
        enum:['available','adopted'],
        default: 'available'
    },
    img_url:{
        type:String,
    },
    o_name: {
        type: String,
    },
    o_num: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}

export const Pets = mongoose.model("Pet",PetSchema)

// Schema for user collection 
const UserSchema = {
    u_name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['m','f','t','x'],
        required:true
    },
    city:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    img_url:{
        type:String,
    },
}

export const Users = mongoose.model("User",UserSchema)
