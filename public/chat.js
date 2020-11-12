// Make connection to server
var socket = io.connect("http://localhost:3000");

// Get the DOM properties needed
let message = document.querySelector("#message");
let username = document.querySelector("#username");
let result = document.querySelector("#output");
let btn = document.querySelector("#send");

// Trigger events 
btn.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        username: username.value
    })
});

// Listen for events
socket.on("chat", (data) => {
    result.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
})