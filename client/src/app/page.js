"use client"
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [socket,setSocket] = useState( undefined);
  const [inbox,setInbox] = useState([]);
  const [message,setMessage] = useState("");
  const [roomName,setRoomName] = useState("");

  const handleMessage = ()=>{
    socket.emit("message", message, roomName)
    };
  useEffect(()=>{
    const socket = io("http://localhost:8080"); 
    setSocket(socket);


    function onMessage(message){
      setInbox(inbox => [...inbox, message])
    }
    socket.on("message",onMessage)

 
    return ()=>{
      socket.off("message",onMessage)
    }
  },[])


  useEffect(()=>{})

  return (
    <div className="bg-black text-black w-full flex items-center justify-center">
      <div className="flex flex-col gap-5 mt-20 px-10 lg:px-48 w-96 items-center justify-center">
      {/* Joining Room */}
      <div className="flex gap-2 items-center justify-center">
              <input type="text" name="room" className="flex-1  border rounded px-2 py-1" onChange={(e)=>setRoomName(e.target.value)} />
              <button className="w-40 bg-indigo-500 py-1 text-white">Join room</button>
          </div>
        {/* Showing the messages */}
        <div className="flex flex-col gap-2 border rounded-lg p-10 text-black w-96">
          {inbox.map((message,index)=>(
            <div key={index} className="bubble left">{message}</div>
          ))}
        </div>
        {/* Send Message */}
          <div className="flex gap-2 items-center justify-center">
              <input type="text" name="message" className="flex-1  border rounded px-2 py-1" onChange={(e)=>setMessage(e.target.value)} />
              <button className="w-40 bg-indigo-500 py-1 text-white" onClick={handleMessage}>Send Message</button>
          </div>

      </div>
    </div>
  )
}
