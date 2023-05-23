import React, {useEffect, useState} from 'react';
import './Button.styles.css';
const Button = (
    {
        onClick,
        text,
        variant,
    }
) => {
    const [className, setClassName] = useState('button')
    useEffect(() => {
        switch (variant){
            case 'red':
                setClassName('button red')
                break
            default:
                setClassName('button')
        }
    }, [])
    return (
        <button
            className={className}
            onClick={onClick}

        >
            {text}
        </button>
    );
};

export default Button;
