import type React from "react";

type ButtonProps = {
    text: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const DefaultButton = ({
    text = 'Click me',
    className = '',
    onClick = () => { }
}: ButtonProps) => {
    return (
        <button
            className={`py-1 px-2 rounded mt-2 transition-colors ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}