const express = require("express")
const authmiddileware = require("../middileware/middileware")
const userController = require("../controllers/usercontroller")
const authuser = express.Router()


authuser.post("/register" ,userController.Register)
authuser.post("/login",userController.Login )

authuser.get("/get-me",authmiddileware,userController.getme)

module.exports = authuser