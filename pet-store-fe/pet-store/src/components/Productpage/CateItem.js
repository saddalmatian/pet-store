import React from 'react';
import { Link } from 'react-router-dom';
import './CateItem.css';
import CateItemLink from './CateItemLink';

function CateItem(props) {
    console.log(props)
    return (
        <div className="category-item">
            <p className="category-item__heading">{props.heading}</p>
            {props.items.map((item, index) => (
                <Link to={`/product/${item.ProductTypeID}`}
                    key={index}
                    style={{ textDecoration: "none", color: "var(--black-color)" }}
                >
                    {console.log(item)}
                    <CateItemLink title={item.ProductType} />
                </Link>
            ))}
        </div>
    );
}

export default CateItem;