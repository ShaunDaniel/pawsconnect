import express from "express"
import { Pets, Users } from "../models/mongo.js"
import cors from "cors"
import morgan from "morgan"
import multer from "multer"
import path, { dirname } from "path"
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3001

app.use(express.json())   
app.use(cors())
app.use(morgan("combined"))



let storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'../public/uploads')
    },
    filename: (req,file,cb) => {
        cb(null,`${req.body.p_name}_${req.body.o_num}.jpg`)
    }
})

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

const upload = multer({storage:storage})

app.use('/uploads', express.static('../public/uploads'));


app.get("/api/pets/img/:id",(req,res)=>{    
    res.send(path.join(__dirname,`../public/uploads/${req.params.id}`))
})

app.post("/api/pets",upload.single('img_upload'),(req,res)=>{
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

app.get('/api/pets',(req,res)=>{
    Pets.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).send(`Couldn't get pet data! Server error: ${err}`)
    });
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})