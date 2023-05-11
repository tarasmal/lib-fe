import React from 'react';

const itemRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    marginBottom: '10px',
};

const attributeStyle = {
    marginRight: '10px',
};

const ContentItem = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} style={itemRowStyle}>
                    {Object.entries(item).map(([attribute, value]) => (
                        <div key={attribute} style={attributeStyle}>
                            <strong>{attribute}:</strong> {value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ContentItem;
