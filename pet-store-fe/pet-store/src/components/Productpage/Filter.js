import './Filter.css'
import Button from '../Button';
import Dropdown from '../Dropdown';
import Search from './Search';

function Filter(props) {
    return (
        <div className="col-md product-filter">
            <div class="d-flex gap-3">
                <p className="product-filter__heading">Sort by</p>
                <Button title="Best Seller" />
                <Button title="New" />
            </div>
            <Dropdown title="Cost"/>
            <Search />
            <div className="product-filter__page">
                <span className="product-filter__page-current">1</span>
                /
                <span className="product-filter__page-total">10</span>
                <div className="filter-page__btn">
                    <a href="#1"><i className="fas fa-angle-left filter-page__icon"></i></a>
                    <a href="#1"><i className="fas fa-angle-right filter-page__icon"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Filter;