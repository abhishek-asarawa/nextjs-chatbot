import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../Components/DogPictures";
import Options from "../Components/Options";

const botName = "Bot";

const config = {
    initialMessages: [
        createChatBotMessage(`Hi, I am ${botName}`, {
            widget: "optionsMenu",
        }),
    ],
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
        {
            widgetName: "optionsMenu",
            widgetFunc: (prop) => <Options {...prop} />,
        },
    ],
};

export default config;
