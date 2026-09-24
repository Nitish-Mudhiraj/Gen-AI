const { Server } = require("socket.io");
let io;

 function inisocket(httpserver){
    io = new Server(httpserver,{
        cors:{
            origin:"https://gen-ai-iota-amber.vercel.app",
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


