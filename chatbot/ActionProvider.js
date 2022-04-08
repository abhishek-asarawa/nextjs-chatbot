class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createChatBotMessage;
    }

    handleHello() {
        const msg = this.createChatBotMessage("Hello! Nice to meet you.");

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
        }));
    }
}

export default ActionProvider;
