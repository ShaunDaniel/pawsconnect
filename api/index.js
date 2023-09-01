import express from "express"
import cors from "cors"
import morgan from "morgan"

import petRouter from "../routes/pets.js"
import userRouter from "../routes/users.js"

import path, { dirname } from "path"
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3001

app.use(express.json())   
app.use(cors())
app.use(morgan("combined"))


app.use('/api/pets',petRouter)
app.use('/api/users',userRouter)

app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));


app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})