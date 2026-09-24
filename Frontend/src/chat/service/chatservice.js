import { io } from "socket.io-client";
import axios from "axios";

const API_URL = "https://gen-ai-inr6.onrender.com";

export function socketinitialization() {
    const socket = io(API_URL, {
        withCredentials: true,
    });

    socket.on("connect", () => {
        console.log("connected to socket.io server");
    });

    return socket;
}

export async function createChat(message) {
    const response = await axios.post(
        `${API_URL}/perplex/users/chat/chat`,
        {
            message
        },
        {
            withCredentials: true
        }
    );

    return response.data;
}

export async function getAllChats() {
    const response = await axios.get(
        `${API_URL}/perplex/users/chat/getallchats`,
        {
            withCredentials: true
        }
    );

    return response.data;
}

export async function getOneChat(chatId) {
    const response = await axios.get(
        `${API_URL}/perplex/users/chat/${chatId}`,
        {
            withCredentials: true
        }
    );

    return response.data;
}