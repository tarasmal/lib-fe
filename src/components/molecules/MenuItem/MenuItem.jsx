import React from 'react';
import './MenuItem.styles.css'
const MenuItem = ({text, onClick}) => {
    return (
        <p onClick={onClick} className={'menu-item'}>
            {text}
        </p>
    );
};

export default MenuItem;
