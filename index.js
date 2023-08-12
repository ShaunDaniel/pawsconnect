import express from "express"
import { Pets, Users } from "./models/mongo.js"

const app = express()
const port = 3000

app.use(express.json())   

app.get("/",(req,res)=>{
    res.send("hi")
})

app.post("/api/pets",(req,res)=>{
    const petRequest = new Pets({
        name:req.body.name,
        type:req.body.type,
        age:req.body.age,
        description:req.body.description,
        status:req.body.status,
        owner: req.body.owner,
    })
    petRequest.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.statusCode(500).send(`Couldn't add pet! Server error: ${err}`)
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