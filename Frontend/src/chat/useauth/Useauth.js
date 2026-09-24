import {socketinitialization} from "../service/chatservice"



import { createChat,getAllChats,getOneChat } from "../service/chatservice"

import { useContext } from "react"

import { Datachatcontext } from "../Chatcontext"



export function useauth (){

    const {  chats,setChats,currentChat,setCurrentChat,messages,setMessages} = useContext(Datachatcontext)

     async function handleCreateChat(message) {
        try {

            const data = await createChat(message);

            console.log("CREATE CHAT RESPONSE:", data);

            // Add newly created chat to chats
            setChats((prevChats) => [
                ...prevChats,
                data.chat
            ]);

            // Set current chat
            setCurrentChat(data.chat);

            // Set initial messages
            setMessages([
                data.userMessage,
                data.aiMessage
            ]);

            return data;

        } catch (error) {

            console.log("CREATE CHAT ERROR:", error);

            throw error;
        }
    }


    // Get all chats
    async function handleGetAllChats() {
        try {

            const data = await getAllChats();

            console.log("ALL CHATS:", data);

            setChats(data.chats);

            return data;

        } catch (error) {

            console.log("GET ALL CHATS ERROR:", error);

            throw error;
        }
    }


    // Get one particular chat
    async function handleGetOneChat(chatId) {
        try {

            const data = await getOneChat(chatId);

            console.log("ONE CHAT:", data);

            setCurrentChat(data.chat);

            setMessages(data.messages || []);

            return data;

        } catch (error) {

            console.log("GET ONE CHAT ERROR:", error);

            throw error;
        }
    }


    return {
        socketinitialization,handleGetOneChat,handleGetAllChats,handleCreateChat,currentChat,messages,chats
    }
}