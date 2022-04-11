import { Button } from "@mui/material";

const Options = (props) => {
    const options = [
        {
            id: 1,
            handler: () => props.actionProvider.handleSelectOption(1),
            text: "Option 1",
        },
        {
            id: 2,
            handler: () => props.actionProvider.handleSelectOption(2),
            text: "Option 2",
        },
        {
            id: 3,
            handler: () => props.actionProvider.handleSelectOption(3),
            text: "Option 3",
        },
    ];
    return (
        <div>
            {options.map((option) => (
                <Button key={option.id} onClick={option.handler}>
                    {option.text}
                </Button>
            ))}
        </div>
    );
};

export default Options;
