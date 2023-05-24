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
const buttonsSectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: '10px'
}


const ContentItem = ({ items, deleteFunction, setIsFormOpened }) => {
    const keys = Object.entries(items)
    const id = keys[0][1]
    const deleteHandler = useCallback(async () => {
        await deleteFunction(id)
    } ,[items])
    const update = (event) => {
        event.stopPropagation()
        setIsFormOpened(true)
    }
    return (
        <div style={itemRowStyle}>
            {keys?.map(([attribute, value]) => (
                <p key={attribute}>{attribute}: {value}</p>
            ))}
            <div style={buttonsSectionStyle}>
                <Button text={'Delete'} variant={'red'} onClick={deleteHandler}/>
                <Button text={'Update'} variant={'green'} onClick={update}/>
            </div>
        </div>
    );
};

export default ContentItem;
