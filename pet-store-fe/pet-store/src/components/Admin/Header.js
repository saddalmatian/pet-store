import React from 'react';
import './Header.css'
import Sidebar from"./Sidebar"
import React from 'react';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg header" colorOnScroll="500">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="container-fluid header-wrapper" style={{marginLeft:'64px'}}> 
                
                <a className="navbar-brand" href="#">Dashboard</a>
                
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