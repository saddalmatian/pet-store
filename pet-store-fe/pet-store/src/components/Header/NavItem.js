import React from 'react';
import './NavItem.css';

function NavItem( props ) {
    return (
        <li className="nav-list-item">
            {props.title}
        </li>
    );
}

export default NavItem;