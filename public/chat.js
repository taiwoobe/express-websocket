// Make connection to server
var socket = io.connect("http://localhost:3000");

// Get the DOM properties needed
let message = document.querySelector("#message");
let username = document.querySelector("#username");
let result = document.querySelector("#output");
let feedback = document.querySelector("#feedback");
let btn = document.querySelector("#send");

// Trigger events 
btn.addEventListener("click", () => {
    socket.emit("chat", {
        message: message.value,
        username: username.value
    });
    message.value = "";
});

message.addEventListener("keypress", () => {
    socket.emit("typing", username.value);
});

// Listen for events
socket.on("chat", (data) => {
    feedback.innerHTML = "";
    result.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});

socket.on("typing", (data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing... </em></p>';
});