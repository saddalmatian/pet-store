import './Dropdown.css';
import DropdownItem from './DropdownItem';

function Dropdown(props) {
    return (
        <div class="dropdown product-filter__dropdow">
            <button class="btn btn-secondary dropdown-toggle product-filter__dropdow-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {props.title}
            </button>
            <ul class="dropdown-menu product-filter__dropdow-menu" aria-labelledby="dropdownMenuButton1">
                <DropdownItem title="High to Low" />
                <DropdownItem title="Low to High" />
            </ul>
        </div>
    );
}

export default Dropdown;