

const socket = io();

let user;
let chatBox = document.getElementById("chatBox");

Swal.fire({
  title: "Indentificate",
  input: "text",
  text: "Ingresar el usuario para identificarte en el chat",
  inputValidator: (value) => {
    return !value && "Por favor ingrese el nombre de usuario"
  },
  allowOutsideClick: false,
}).then( result => {
  user = result.value;
  socket.emit("newUser", user);
})

chatBox.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    if(chatBox.value.trim().length > 0) {
      socket.emit("message", {user: user, message: chatBox.value});
      chatBox.value = "";
    } else {
      alert("Debe escribir al menos un carácter")
    }
  } 
  
})


socket.on("messageLog", (data) => {
  let messageLog = document.getElementById("messageLog");
  let messages = "";
  data.forEach( msg => {
      messages = messages + `${msg.user} dice: ${msg.message} </br>`;
    });

  messageLog.innerHTML = messages;


})

socket.on("newUser", (data) => {

  Swal.fire({
    text: `Usuario ${data} conectado`,
    toast: true,
    position: "top-right",
    timer: 3000
  })
  
})