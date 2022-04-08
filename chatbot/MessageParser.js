class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(msg) {
        if (msg.includes("hello")) {
            this.actionProvider.handleHello();
        }
    }
}

export default MessageParser;
