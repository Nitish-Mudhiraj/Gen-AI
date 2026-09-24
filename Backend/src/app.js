
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const authuser = require("./Routes/userRoutes")
const authchat = require("../src/Routes/chatRoutes")
const app = express()
const cookieparser = require("cookie-parser")
const cors = require("cors")
app.use(cookieparser())
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
   
}))

app.use("/perplex/users" ,authuser)
app.use("/perplex/users/chat",authchat)


module.exports = app