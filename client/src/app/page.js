"use client"
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [socket,setSocket] = useState( undefined);
  const [index,setIndex] = useState(["hello","what's good"])
  const [message,setMessage] = useState("")

  useEffect(()=>{
    const socket = io("http://localhost:8080");

    const handleMessage = ()=>{
      const message =
    }


  },[])
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-5 mt-20 px-10 lg:px-48">
      {/* Joining Room */}
      <div className="flex gap-2 items-center justify-center">
              <input type="text" name="message" className="flex-1  border rounded px-2 py-1" />
              <button className="w-40 bg-indigo-500 py-1">Join room</button>
          </div>
        {/* Showing the messages */}
        <div className="flex flex-col gap-2 border rounded-lg p-10 text-black">
          {index.map((message,index)=>(
            <div key={index} className="border rounded px-4 py-2">hello</div>
          ))}
        </div>
        {/* Send Message */}
          <div className="flex gap-2 items-center justify-center">
              <input type="text" name="message" className="flex-1  border rounded px-2 py-1" />
              <button className="w-40 bg-indigo-500 py-1">Send Message</button>
          </div>

      </div>
    </div>
  )
}
