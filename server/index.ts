import express, { Request, Response } from "express"
import cors from "cors"
require("dotenv").config()

const app = express()

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"
}))

app.get('/', (req:Request,res:Response) => {
    res.send("Backend started working ")
})

app.listen(process.env.PORT, () => {
    console.log("http://localhost:8000")
})