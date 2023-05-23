import React, {useCallback} from 'react';
import './ContentTemplate.styles.css'
import MenuItem from "../../molecules/MenuItem/MenuItem";
import ContentItem from "../../molecules/ContentItem/ContentItem";
const Menu = ({menuItems, setCurrentContent}) => {
    const onClickHandler = useCallback(async (handler) => {
        const response = await handler()
        setCurrentContent(response)
    }, [])

    return (
        <div className={'menu'}>
            {
                menuItems?.map(({title, handler}, index) =>
                    <MenuItem
                        onClick={() => onClickHandler(handler)} key={index} text={title}/>)
            }
        </div>
    )
}

const Content = ({items}) => {
    return (
        <div className={'content'}>
            {
                items?.map((item, index) => <ContentItem key={index} items={item}/>)
            }
        </div>
    )
}

const ContentTemplate = ({items, menuItems, setCurrentContent}) => {
    return (
        <div className={'container'}>
            <Menu menuItems={menuItems} setCurrentContent={setCurrentContent}/>
            <Content items={items}/>
        </div>
    );
};

export default ContentTemplate;
