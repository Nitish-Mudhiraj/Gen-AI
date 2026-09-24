import React, { createContext } from 'react'
import { useState } from 'react';

export const Datachatcontext = createContext()

const Chatcontext = ({children}) => {

    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);

  return (
   <Datachatcontext.Provider value={{ 
                chats,
                setChats,
                currentChat,
                setCurrentChat,
                messages,
                setMessages}}>
        {children}
   </Datachatcontext.Provider>
  )
}

export default Chatcontext