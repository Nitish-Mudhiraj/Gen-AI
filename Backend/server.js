const app = require("./src/app");
const connectToDb = require("./src/config/database");
const http = require("http");
const {inisocket} = require("./src/sockets/socketio")



connectToDb();


const httpserver = http.createServer(app)


inisocket(httpserver)


httpserver.listen(3000, () => {
  console.log("Server is running on port 3000");
});