const port = 3001;
const io = require("socket.io")(port, {
    cors: { origin: "*" }
});

console.log("running on port " + port);

io.on("connection", (socket) => {
    socket.on("message", (msg) => {
        io.emit("message", msg);
    });
});