const express = require("express")
const authmiddileware = require("../middileware/middileware")
const  {createchat,getAllChats, getOneChat} = require("../controllers/chatcontroller")


const authchat = express.Router()

authchat.post("/chat" ,authmiddileware,  createchat)
authchat.get("/getallchats" ,authmiddileware,  getAllChats)
authchat.get("/:chatId", authmiddileware, getOneChat);

module.exports = authchat