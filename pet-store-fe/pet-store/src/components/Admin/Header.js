import React from 'react';
import './Header.css'
function Header() {

    return (
        <nav className="navbar navbar-expand-lg header" colorOnScroll="500">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Dashboard</a>
                <button href="#" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="navigation-index" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">
                                <span className="no-icon">Account img</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownmenulink">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Add</a>
                                <a className="dropdown-item" href="#">Delete</a>
                                <a className="dropdown-item" href="#">Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
  
}
export default Header;