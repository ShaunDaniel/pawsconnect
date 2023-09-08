import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import petRouter from "../routes/pets.js"
import mongoose from "mongoose";
import userRouter from "../routes/users.js"
import path, { dirname } from "path"
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000


dotenv.config()
const url = process.env.MONGO_URI
mongoose.connect(`${url}`).then(() => {
    console.log(`Connected to database!`)
}).catch((err) => {
    console.error(`MongoDB connection error : ${err}`)
});


app.use(express.json())   
app.use(cors())
app.use(morgan("combined"))


app.use('/api/pets',petRouter)
app.use('/api/user',userRouter)

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));
app.use('/users', express.static(path.join(__dirname, '../public/users')));
app.use(express.static("./client/build"));
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})