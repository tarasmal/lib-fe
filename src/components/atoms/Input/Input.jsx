import React, { useState } from 'react';
import './Input.styles.css';

const Input = ({ label, getValue }) => {
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        getValue(inputValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '5%' }}>
            <p style={{ fontSize: '24px' }}>{label}</p>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={label}
            />
        </div>
    );
};

export default Input;
