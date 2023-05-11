import React, {useEffect, useState} from 'react';
import ContentTemplate from "../../templates/ContentTemplate/ContentTemplate";
import {getAllApplications} from "../../../api/librarian";
import {config} from "./config";
const LibrarianContent = () => {
    const [items, setItems] = useState([])
    const testItems = ['sdsdsd', 'sdsd', 'sdsdsdsdsd']
    const api = async () => {
        const response = await getAllApplications()
        setItems(response)
    }
    useEffect(() => {
        console.log(items)
    }, [items])
    return (
        <>
            <ContentTemplate items={items} menuItems={config} setCurrentContent={setItems}/>
        </>


    );
};

export default LibrarianContent;
