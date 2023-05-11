import React from 'react';

const itemRowStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: '3px',
    paddingRight: '3px',
    backgroundColor: '#f0f0f0',
    marginBottom: '10px',
    borderRadius: "25px"
};

const attributeStyle = {
    marginRight: '10px',
};

const ContentItem = ({ items }) => {
    console.log(items)
    const keys = Object.entries(items)
    console.log(keys)
    return (
        <div style={itemRowStyle}>
            {keys?.map(([attribute, value], index) => (
                <p>{attribute}: {value}</p>
            ))}
        </div>
    );
};

export default ContentItem;
