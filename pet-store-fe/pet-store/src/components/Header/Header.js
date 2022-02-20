import './Header.css'
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Navigation />
            <div className="header-action">
                <span className="header-action__signin">Sign in </span>
                 / 
                <span className="header-action__signup"> Sign up</span>
            </div>
        </div>
        
    );
}

export default Header;