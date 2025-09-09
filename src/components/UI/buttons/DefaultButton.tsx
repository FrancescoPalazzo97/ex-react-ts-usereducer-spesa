type ButtonProps = {
    text: string;
    color?: string;
    onClick?: () => void;
}

export const DefaultButton = ({
    text = 'Click me',
    color = 'emerald',
    onClick = () => { }
}: ButtonProps) => {
    return (
        <button
            className={`bg-${color}-500 text-white py-1 px-2 rounded mt-2 hover:bg-${color}-600 transition-colors`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}