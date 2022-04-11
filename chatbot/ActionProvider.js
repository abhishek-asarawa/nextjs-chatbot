class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createChatBotMessage;
    }

    setMsg(msg) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, msg],
        }));
    }

    handleHello() {
        const msg = this.createChatBotMessage("Hello! Nice to meet you.");

        this.setMsg(msg);
        this.handleOptionMenu();
    }

    handleDog() {
        const msg = this.createChatBotMessage(
            "Here's a nice dog picture for you",
            { widget: "dogPicture" }
        );

        this.setMsg(msg);
    }

    handleOptionMenu() {
        const msg = this.createChatBotMessage("How can I help you?", {
            widget: "optionsMenu",
        });
        this.setMsg(msg);
    }

    handleSelectOption(option = 1) {
        const msg = this.createChatBotMessage(`Working on option - ${option}`);
        this.setMsg(msg);
    }
}

export default ActionProvider;
