// Lado del cliente
const socket = io();

// Enviamos información al servidor desde el lado del cliente
socket.emit("message", "Hola servidor te estoy enviando un mensaje")

// Escuchamos del lado del cliente
socket.on("socket-individual", (data) => {
    console.log(data);
});

socket.on("socket-excluye-actual", (data) => {
    console.log(data);
});

socket.on("socket-todos", (data) => {
    console.log(data);
});