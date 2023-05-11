import React, {useState} from 'react';
import ContentTemplate from "../../templates/ContentTemplate/ContentTemplate";
const LibrarianContent = () => {
    const [items, setItems] = useState([])
    const menuItems = ['Students', 'Books', 'Applications']
    const testItems = ['sdsdsd', 'sdsd', 'sdsdsdsdsd']
    console.log(['Students', 'Books', 'Applications'])
    return (
        <ContentTemplate items={testItems} menuItems={menuItems}/>

    );
};

export default LibrarianContent;
