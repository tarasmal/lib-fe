import React, {useState} from 'react';
import './Input.styles.css'
const Input = ({label}) => {
    const [value, setValue] = useState('')
    return (
        <div
            style={{display: "flex", flexDirection: "column", paddingRight: '5%'}}
        >
            <p style={{fontSize: "24px"}}>{label}</p>
            <input
                type={'text'}
                value={value}
                onChange={setValue}
                placeholder={label}
            />
        </div>

    );
};

export default Input;
