import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    const handleClick = () => {
        localStorage.removeItem('Token');
        localStorage.removeItem('Name');
        localStorage.removeItem('BillID');
        window.location.reload();
        window.history.forward();
    }

    return (
        <div className="container header">
            <Logo />
            <Navigation />
            <div className="header-action">
                <Link className="header-icon__cart" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                {localStorage.getItem('Token') ?
                    <div className="user-dropdown">
                        <div className="user">
                            <i className="fa-solid fa-user header-icon__user"></i>
                            <span className='username'>{localStorage.getItem('Name')}</span>
                        </div>
                        <div className="user-dropdown__content">
                            <p><Link to="/info">Thông tin</Link></p>
                            <p onClick={handleClick}>Đăng xuất</p>
                        </div>
                    </div>
                    :
                    <>
                        <Link to="/sign_up" className="header-action__signin"><span>Đăng ký</span></Link>
                        <span>/</span>
                        <Link to="/sign_in" className="header-action__signup"><span>Đăng nhập</span></Link>
                    </>
                }
            </div>


        </div>

    );
}

export default Header;