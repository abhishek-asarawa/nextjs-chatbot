import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Bot";

const config = {
    initialMessages: [createChatBotMessage(`Hi, I am ${botName}`)],
    botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#5ccc9d",
        },
    },
};

export default config;
