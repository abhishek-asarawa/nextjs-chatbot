import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../Components/DogPictures";

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
    widgets: [
        {
            widgetName: "dogPicture",
            widgetFunc: (prop) => <DogPicture {...prop} />,
        },
    ],
};

export default config;
