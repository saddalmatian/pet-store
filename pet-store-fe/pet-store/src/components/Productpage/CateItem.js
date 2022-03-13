import React from 'react';
import './CateItem.css';
import CateItemLink from './CateItemLink';

function CateItem( props ) {
    return (
        <div className="category-item">
            <p className="category-item__heading">{props.heading}</p>
            <CateItemLink title='Accessories' />
            <CateItemLink title='Food' />
            <CateItemLink title='Hygiene' />
        </div>
    );
}

export default CateItem;