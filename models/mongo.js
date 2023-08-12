import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const url = process.env.MONGO_URI

mongoose.connect(url).then(() => {
    console.log(`Connected to database!`)
}).catch((err) => {
    console.error(`MongoDB connection error : ${err}`)
});


// Schema for pet collection
const PetSchema = {
    name: {
        type:String,
        required:true
    },
    type: {
        type:String,
        required:true,
        enum: ['dog','cat']
    },
    age: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true,
        enum:['available','adopted'],
        default: 'available'
    },
    image:{
        type:String,
    },
    owner: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}

export const Pets = mongoose.model("Pet",PetSchema)

// Schema for user collection 
const UserSchema = {
    name:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    email:{
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
    createdAt: {
        type: Date,
        default: Date.now
    }
}

export const Users = mongoose.model("User",UserSchema)
