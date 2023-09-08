import { Router } from "express";
import { Users } from "../models/mongo.js";
import multer from "multer"


const userRouter = Router()

userRouter.get("/",(req,res)=>{
    Users.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err)
    });
})
userRouter.get("/:u_id", (req, res) => {
    const u_id = req.params.u_id; // Retrieve the user ID parameter from the URL
    Users.findById(u_id) // Use the u_id variable in the query
    .then((result) => {
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    });

});


let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'../public/users')
    },
    filename: (req,file,cb) => {
        cb(null,`${req.body.img_url}`)
    }
})

const upload = multer({storage:storage})


userRouter.post("/",upload.single('img_upload'),(req,res)=>{
    const userRequest = new Users({
        u_name:req.body.u_name,
        age:req.body.age,
        username:req.body.username,
        password:req.body.password,
        contact:req.body.contact,
        city:req.body.city,
        gender:req.body.gender,
        img_url: req.body.img_url
    })
    
    userRequest.save().then((result) => {
        res.send(result)
        console.log(result)
    }).catch((err) => {
        console.error(err)
    });    
})


userRouter.post("/login",(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    
    if(!username || !password){
        res.status(404).send("Missing username/password!")
    }
    else{
        Users.find({username:username}).then((result) => {
            if(password==result[0].password){
                res.json(result)
            }
            else{
                res.status(401).send("Incorrect Password!")
            }
        }).catch((err) => {
            res.send(err)
        });
    }


})


export default userRouter