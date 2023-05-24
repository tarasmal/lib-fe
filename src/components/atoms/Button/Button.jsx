import React, {useEffect, useState} from 'react';
import './Button.styles.css';
const Button = (
    {
        onClick,
        text,
        variant,
        ...props
    }
) => {
    const [className, setClassName] = useState('button')
    useEffect(() => {
        switch (variant){
            case 'red':
                setClassName('button red')
                break
            case 'green':
                setClassName('button green')
                break
            default:
                setClassName('button')
        }
    }, [])
    return (
        <button
            className={className}
            onClick={onClick}
            {...props}

        >
            {text}
        </button>
    );
};

export default Button;
