import React from 'react';
import './HomeBtn.css'

function HomeBtn( props ) {
    return (
        <>
            <button type="button" className="home-btn">{props.title}</button>
        </>
    );
}

export default HomeBtn;