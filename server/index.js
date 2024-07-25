import { Server } from "socket.io"

const io = new Server(process.env.PORT||8080,{cors:{
    origin:"http://localhost:3001",
    methods:["GET","POST"]
}})
console.log("Running ...")

io.on("connection", (socket)=>{
    console.log("A user is connected...");
    socket.on("message",(message,roomName)=>{
        console.log(message,roomName);
        io.emit("message", message)
    })
})