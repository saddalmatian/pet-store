import React from 'react';
import './Button.css';

function Button( props ) {
    return (
        <button type="button" class="button">{props.title}</button>
    );
}

export default Button;