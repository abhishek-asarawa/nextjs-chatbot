class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(msg) {
        console.log(msg);
    }
}

export default MessageParser;
