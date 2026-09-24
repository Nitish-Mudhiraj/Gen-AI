const mongoose = require("mongoose")


function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("databse is connected")
    })
}

module.exports = connectToDB