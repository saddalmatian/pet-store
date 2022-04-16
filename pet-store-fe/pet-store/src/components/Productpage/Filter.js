import React, { useState, useEffect } from 'react';
import './Filter.css'
import Button from '../Button';
import Search from './Search';
import { Link } from 'react-router-dom';

function Filter(props) {
    const [isMostSold, setIsMostSold] = useState(false);

    const mostSoldClick = () => {
        setIsMostSold(true);
        // console.log('ahihi');
    }

    return (
        <div className="col-md product-filter">
            <p className="product-filter__heading">Sắp xếp theo</p>
            <div className="d-flex">
                {/* <Link 
                    to={`/product-most-sold/${isMostSold}`}
                    style={{ textDecoration: "none", color: "var(--black-color)" }}
                > */}
                    <Link 
                        style={{ textDecoration: "none", color: "var(--black-color)" }} 
                        to={`/product-most-sold/${isMostSold}`} 
                        onClick={mostSoldClick}
                    >
                        Ban chay
                    </Link>
                {/* </Link> */}
                <Button title="Giá từ cao đến thấp" />
                <Button title="Giá từ thấp đến cao" />
                <Search />
            </div>
        </div>
    );
}

export default Filter;