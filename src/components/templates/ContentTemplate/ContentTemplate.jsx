import React from 'react';
import './ContentTemplate.styles.css'
import MenuItem from "../../molecules/MenuItem/MenuItem";
import ContentItem from "../../molecules/ContentItem/ContentItem";
const Menu = ({menuItems, itemOnClickHandler}) => {
    return (
        <div className={'menu'}>
            {
                menuItems?.map((item, index) => <MenuItem onClick={itemOnClickHandler} key={index} text={item}/>)
            }
        </div>
    )
}

const Content = ({items}) => {
    return (
        <div className={'content'}>
            {
                //items?.map((item, index) => <ContentItem key={index} item={item}/>)
            }
        </div>
    )
}

const ContentTemplate = ({items, menuItems}) => {
    console.log(menuItems)
    console.log(items)
    return (
        <div className={'container'}>
            <Menu menuItems={menuItems}/>
            <Content items={items}/>
        </div>
    );
};

export default ContentTemplate;
