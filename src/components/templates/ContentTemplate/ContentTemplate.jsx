import React, {useCallback} from 'react';
import './ContentTemplate.styles.css'
import MenuItem from "../../molecules/MenuItem/MenuItem";
import ContentItem from "../../molecules/ContentItem/ContentItem";
const Menu = ({menuItems, setCurrentContent, setInitFormState, setDeleteHandler, setUpdateHandler}) => {
    const onClickHandler = useCallback(async (handler, formConfig, deleteHandler, updateHandler) => {
        const response = await handler()
        setCurrentContent(response)
        setInitFormState(formConfig)
        setDeleteHandler(deleteHandler)
        setUpdateHandler(updateHandler)
    }, [])

    return (
        <div className={'menu'}>
            {
                menuItems?.map(({title, handler, formConfig, deleteHandler, updateHandler}, index) =>
                    <MenuItem
                        onClick={() => onClickHandler(handler, formConfig, deleteHandler, updateHandler)}
                        key={index}
                        text={title}
                    />)
            }
        </div>
    )
}

const Content = ({items, deleteHandler, updateHandler, setIsFormOpened}) => {
    return (
        <div className={'content'}>
            {
                items?.map((item, index) =>
                    <ContentItem
                    key={index}
                    items={item}
                    deleteFunction={deleteHandler}
                    setIsFormOpened={setIsFormOpened}
                    />)
            }
        </div>
    )
}

const ContentTemplate = (
    {
        items,
        menuItems,
        setCurrentContent,
        setInitFormState,
        setIsFormOpened,
        setDeleteHandler,
        setUpdateHandler,
        deleteHandler,
        updateHandler
    }
) => {
    return (
        <div className={'container'}>
            <Menu
                menuItems={menuItems}
                setCurrentContent={setCurrentContent}
                setInitFormState={setInitFormState}
                setDeleteHandler={setDeleteHandler}
                setUpdateHandler={setUpdateHandler}
            />
            <Content
                items={items}
                deleteHandler={deleteHandler}
                updateHandler={updateHandler}
                setIsFormOpened={setIsFormOpened}
            />
        </div>
    );
};

export default ContentTemplate;
