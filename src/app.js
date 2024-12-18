import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// used for josn data
app.use(express.json({limit:"16kb"}))
// used for url data 
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// use for image and assets folder
app.use(express.static("public"))
app.use(cookieParser())
export {app}