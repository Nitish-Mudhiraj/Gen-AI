import { io } from "socket.io-client";
import axios from "axios";

export function socketinitialization(){
    const socket = io("http://localhost:3000", {
        withCredentials: true,
    });

    socket.on("connect",()=>{
        console.log("connected to socket.io server")
    })
}

export async function createChat(message) {

    const response = await axios.post("http://localhost:3000/perplex/users/chat/chat", {
        message
    },{
        withCredentials:true
    });

    return response.data;
}

export async function getAllChats() {

    const response = await axios.get("http://localhost:3000/perplex/users/chat/getallchats",{
        withCredentials:true
    });

    return response.data;
}

export async function getOneChat(chatId) {

  const response = await axios.get(
    `http://localhost:3000/perplex/users/chat/${chatId}`,
    {
      withCredentials: true
    }
  );

  return response.data;
}