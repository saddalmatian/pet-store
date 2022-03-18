import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBtn.css'

function HomeBtn( props ) {
    return (
        <Link to={props.href}>
            <button type="button" className="home-btn">{props.title}</button>
        </Link>
    );
}

export default HomeBtn;