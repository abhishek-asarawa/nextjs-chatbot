import Chatbot from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Component {...pageProps} />
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
}

export default MyApp;
