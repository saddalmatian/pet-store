import React from 'react';
import './Button.css';

function Button( props ) {
    return (
        <button type="button" className="button">{props.title}</button>
    );
}

export default Button;