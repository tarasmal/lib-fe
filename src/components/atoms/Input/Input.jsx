import React, {useEffect, useState} from 'react';
import './Input.styles.css'
const Input = ({label, getValue}) => {
    const [value, setValue] = useState('')
    useEffect(() => {
        getValue(value)
    }, [value])
    return (
        <div
            style={{display: "flex", flexDirection: "column", paddingRight: '5%'}}
        >
            <p style={{fontSize: "24px"}}>{label}</p>
            <input
                type={'text'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={label}
            />
        </div>

    );
};

export default Input;
