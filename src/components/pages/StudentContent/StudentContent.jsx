import React, {useState} from 'react';

import ContentTemplate from "../../templates/ContentTemplate/ContentTemplate";

const StudentContent = () => {
    const [items, setItems] = useState([])
    return (
        <ContentTemplate items={items}/>
    );
};

export default StudentContent;
