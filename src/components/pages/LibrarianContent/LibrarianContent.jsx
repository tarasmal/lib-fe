import React, {useEffect, useState} from 'react';
import ContentTemplate from "../../templates/ContentTemplate/ContentTemplate";
import {getAllStudents} from "../../../api/general";
import {config} from "./config";
const LibrarianContent = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const fetch = async () => {
            return (await getAllStudents())
        }
        fetch().then(students => setItems(students))
    }, [])
    return (
        <>
            <ContentTemplate items={items} menuItems={config} setCurrentContent={setItems}/>
        </>


    );
};

export default LibrarianContent;
