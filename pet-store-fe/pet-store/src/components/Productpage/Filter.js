import './Filter.css'
import Button from '../Button';
import Dropdown from '../Dropdown';
import Search from './Search';
import PageControl from './PageControl';

function Filter(props) {
    return (
        <div className="col-md product-filter">
                <p className="product-filter__heading">Sort by</p>
            <div class="d-flex gap-3">
                <Button title="Best Seller" />
                <Button title="New" />
            <Dropdown title="Cost"/>
            <Search />
            </div>
            <PageControl current="1" total="10" />
        </div>
    );
}

export default Filter;