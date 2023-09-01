import { Router } from "express"
import multer from "multer"
import { Pets } from "../models/mongo.js"




const petRouter = Router()

let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'../public/uploads')
    },
    filename: (req,file,cb) => {
        cb(null,`${req.body.p_name}_${req.body.o_num}.jpg`)
    }
})

const upload = multer({storage:storage})

petRouter.post("/",upload.single('img_upload'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    const petRequest = new Pets({
        p_name:req.body.p_name,
        type:req.body.type,
        sex:req.body.sex,
        age_m:req.body.age_m,
        age_y:req.body.age_y,
        description:req.body.description,
        status:req.body.status,
        o_name: req.body.o_name,
        o_num: req.body.o_num,
        img_url: req.body.img_url,
    })

    petRequest.save().then((result) => {
        res.status(200).send(result.data)
    }).catch((err) => {
        res.status(500).send(`Couldn't add pet! Server error: ${err}`)
    });
})


petRouter.get('/',(req,res)=>{
    Pets.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).send(`Couldn't get pet data! Server error: ${err}`)
    });
})

petRouter.get('/:id',(req,res)=>{
    console.log("Inside route")
    Pets.find({_id:req.params.id}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).send(`Couldn't get pet data! Server error: ${err}`)
    });
})

export default petRouter
