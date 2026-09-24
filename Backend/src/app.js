
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
    origin:"https://gen-ai-iota-amber.vercel.app/",
    credentials:true
   
}))

app.get("/wow", (req, res) => {
    res.send("Gen-AI Backend is running successfully 🚀");
});

app.use("/perplex/users" ,authuser)
app.use("/perplex/users/chat",authchat)


module.exports = app