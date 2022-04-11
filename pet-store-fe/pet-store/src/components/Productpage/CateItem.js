import React from 'react';
import './CateItem.css';
import CateItemLink from './CateItemLink';

function CateItem(props) {
    return (
        <div className="category-item">
            <p className="category-item__heading">{props.heading}</p>
            {/* {props.items.map((item, index) => (
                <CateItemLink title={item} key={index} />
            ))} */}
            <CateItemLink title='Food' />
            <CateItemLink title='Hygiene' />
        </div>
    );
}

export default CateItem;