import React, {useEffect, useState} from 'react';
import ContentTemplate from "../../templates/ContentTemplate/ContentTemplate";
import {getAllStudents} from "../../../api/general";
import {config} from "./config";
import FormTemplate from "../../templates/FormTemplate/FormTemplate";

const LibrarianContent = () => {
    const [items, setItems] = useState([])
    const [initFormState, setInitFormState] = useState(config[0].formConfig);
    const [deleteHandler, setDeleteHandler] = useState(config[0].deleteHandler)
    const [updateHandler, setUpdateHandler] = useState(config[0].updateHandler)
    const [isFormOpened, setIsFormOpened] = useState(false)
    useEffect(() => {
        const fetch = async () => {
            return (await getAllStudents())
        }
        fetch().then(students => setItems(students))
    }, [])
    return (
        <div>
            <ContentTemplate
                items={items}
                menuItems={config}
                setCurrentContent={setItems}
                setInitFormState={setInitFormState}
                setIsFormOpened={setIsFormOpened}
                setDeleteHandler={setDeleteHandler}
                setUpdateHandler={setUpdateHandler}
                deleteHandler={deleteHandler}
                updateHandler={updateHandler}
            />
            { isFormOpened && <FormTemplate initState={initFormState} setIsFormOpened={setIsFormOpened}/> }
        </div>


    );
};

export default LibrarianContent;
