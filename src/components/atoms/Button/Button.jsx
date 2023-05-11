import React from 'react';
import './Button.styles.css';
const Button = (
    {
        onClick,
        text
    }
) => {
    return (
        <button
            className={'button'}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
