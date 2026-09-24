const Chat = require("../models/chatmodel");
const Message = require("../models/messagesmodel")
const { test, generateTitle } = require("../services/ai")

async function createchat(req, res) {
    try {
        console.log("========== CREATE CHAT CONTROLLER ==========");

        // 1. Get message from frontend
        const { message } = req.body;

        // 2. Validate message
        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                error: "Message is required"
            });
        }

        // 3. Get logged-in user
        const userId = req.user.id;

       

        // 4. Generate chat title
        // const title = await generateTitle(message.trim());
        const title = message.trim().slice(0, 50);

    

        // 5. Create new Chat
        const chat = await Chat.create({
            user: userId,
            title: title
        });

        

        // 6. Save user's message
        const userMessage = await Message.create({
            chat: chat._id,
            role: "User",
            content: message.trim()
        });

       

        // 7. Send user's message to AI
      

        const aiResponse = await test(message.trim());

       

        // 8. Save AI response
        const aiMessage = await Message.create({
            chat: chat._id,
            role: "ai",
            content: aiResponse
        });

      

        // 9. Send response to frontend
        return res.status(201).json({
            success: true,
            chat: chat,
            userMessage: userMessage,
            aiMessage: aiMessage
        });

    } catch (error) {
        console.error("CREATE CHAT ERROR:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}





async function getAllChats(req, res) {
    try {

        const userId = req.user.id;

        const chats = await Chat.find({
            user: userId
        });

        return res.status(200).json({
            success: true,
            chats
        });

    } catch (error) {

        console.log("GET ALL CHATS ERROR:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

async function getOneChat(req, res) {
    try {

        const userId = req.user.id;
        const chatId = req.params.chatId;

        // 1. Find the chat
        const chat = await Chat.findOne({
            _id: chatId,
            user: userId
        });

        if (!chat) {
            return res.status(404).json({
                success: false,
                message: "Chat not found"
            });
        }

        // 2. Find messages of this chat
        const messages = await Message.find({
            chat: chatId
        }).sort({
            createdAt: 1
        });

        // 3. Send both chat and messages
        return res.status(200).json({
            success: true,
            chat: chat,
            messages: messages
        });

    } catch (error) {

        console.log("GET ONE CHAT ERROR:", error);

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}



module.exports = {
    createchat,
    getAllChats,
    getOneChat
    
};

