import React, {useCallback} from 'react';
import Button from "../../atoms/Button/Button";
import {deleteApplication} from "../../../api/application";

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


const ContentItem = ({ items }) => {
    const keys = Object.entries(items)
    const id = keys[0][1]
    const deleteHandler = useCallback(async () => {
        await deleteApplication(id)
    } ,[items])
    console.log(id)
    return (
        <div style={itemRowStyle}>
            {keys?.map(([attribute, value]) => (
                <p key={attribute}>{attribute}: {value}</p>
            ))}
            {
                <Button text={'Delete'} variant={'red'} onClick={deleteHandler}/>
            }
        </div>
    );
};

export default ContentItem;
