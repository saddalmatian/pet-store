import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="container footer">
            <p className="footer-description">
                <i class="far fa-copyright footer-icon"></i>
                copyright 2022 by <span>Pet Store</span> 
            </p>
        </div>
    );
}

export default Footer;