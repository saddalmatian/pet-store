import './DropdownItem.css';

function DropdownItem(props) {
    return (
        <li>
            <a class="dropdown-item product-filter__dropdow-item" href="#1">{props.title}</a>
        </li>
    );
}

export default DropdownItem;