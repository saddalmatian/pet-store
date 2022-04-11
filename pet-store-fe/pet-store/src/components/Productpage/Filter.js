import React from 'react';
import './Filter.css'
import Button from '../Button';
import Search from './Search';

function Filter(props) {
    return (
        <div className="col-md product-filter">
            <p className="product-filter__heading">Sắp xếp theo</p>
            <div className="d-flex">
                <Button title="Bán chạy" />
                <Button title="Giá từ cao đến thấp" />
                <Button title="Giá từ thấp đến cao" />
                <Search />
            </div>
        </div>
    );
}

export default Filter;