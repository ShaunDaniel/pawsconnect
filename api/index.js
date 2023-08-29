import express from "express"
import { Pets, Users } from "../models/mongo.js"
import cors from "cors"
import morgan from "morgan"


const app = express()
const port = 3001

app.use(express.json())   
app.use(cors())
app.use(morgan("combined"))

app.get("/",(req,res)=>{
    res.send("hi")
})

app.post("/api/pets",(req,res)=>{
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
    })
    petRequest.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).send(`Couldn't add pet! Server error: ${err}`)
    });
})

app.get('/api/pets',(req,res)=>{
    Pets.find({}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.statusCode(500).send(`Couldn't get pet data! Server error: ${err}`)
    });
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})