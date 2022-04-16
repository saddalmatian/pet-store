import React from 'react';
import './Start.css';

function Start(props) {
    return (
        <div className="product-item__action-rating">
            <i className="product-item__star--gold fas fa-star"></i>
            { props.value ?
                <p className="product-item__star-value">({props.value})</p> :
                <p className="product-item__star-value"></p>
            }
        </div>
    );
}

export default Start;