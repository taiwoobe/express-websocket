const express = require("express");
const socket = require("socket.io");

//App setup
const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
    console.log("Socket connection established.", socket.id);
})