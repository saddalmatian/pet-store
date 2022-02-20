import './Navigation.css';
import NavItem from './NavItem';

function Navigation() {
    return (
        <div className="nav">
            <ul className="nav-list">
                <NavItem title="Home"/>
                <NavItem title="About"/>
                <NavItem title="Product"/>
                <NavItem title="Services"/>
            </ul>
        </div>
    );
}

export default Navigation;