import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

function NavItem( props ) {
    return (
        <li className="nav-list-item">
            <Link className="nav-list-item__link" to={props.href}>
                {props.title}
            </Link>
        </li>
    );
}

export default NavItem;