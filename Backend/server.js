
const app = require("./src/app");

const connectToDb = require("./src/config/database");

const http = require("http");

const { inisocket } = require("./src/sockets/socketio");

connectToDb();

const httpserver = http.createServer(app);

inisocket(httpserver);

const PORT = process.env.PORT || 3000;

httpserver.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

