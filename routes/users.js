import { Router } from "express";
import { Users } from "../models/mongo.js";

const userRouter = Router()

userRouter.get("/",(req,res)=>{
    Users.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    });
})

userRouter.post("/",(req,res)=>{
    const userRequest = new Users({
        u_name:req.body.u_name,
        age:req.body.age,
        username:req.body.username,
        password:req.body.password,
        contact:req.body.contact,
        city:req.body.city,
        gender:req.body.gender
    })
    userRequest.save().then((result) => {
        res.send(result)
        console.log(result)
    }).catch((err) => {
        console.error(err)
    });    
})

export default userRouter