class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(msg) {
        if (msg.includes("hello")) {
            this.actionProvider.handleHello();
        }

        if (msg.includes("dog")) {
            this.actionProvider.handleDog();
        }
    }
}

export default MessageParser;
