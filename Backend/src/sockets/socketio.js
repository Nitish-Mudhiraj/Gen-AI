const { Server } = require("socket.io");
let io;

 function inisocket(httpserver){
    io = new Server(httpserver,{
        cors:{
            origin:"http://localhost:5173",
            credentials:true
        }
    })

    console.log("socket conection builed")

    io.on("connection",(socket) => {

        console.log("A user connected :" + socket.id)

    })

}

module.exports = {
    inisocket
}


