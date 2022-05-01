import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
    return (
        <div>
            <Link className="logo" to="/">
                <i className="fas fa-paw"></i>
                PetStore
            </Link>
        </div>
    );
}

export default Logo;