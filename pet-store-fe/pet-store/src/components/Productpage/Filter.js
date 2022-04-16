import React from 'react';
import './Filter.css';
import '../Button.css';
import Search from './Search';
import { Link } from 'react-router-dom';

function Filter(props) {
    const isMostSold = true;
    const setIsDesc = 'desc';
    const setIsAsc = 'asc';

    return (
        <div className="col-md product-filter">
            <p className="product-filter__heading">Sắp xếp theo</p>
            <div className="d-flex">
                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product-most-sold/${isMostSold}`}
                    className='button'
                >
                    Bán chạy
                </Link>

                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product-desc/${setIsDesc}`}
                    className='button'
                >
                    Giá từ cao đến thấp
                </Link>

                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product-asc/${setIsAsc}`}
                    className='button'
                >
                    Giá từ thấp đến cao
                </Link>

                <Search />
            </div>
        </div>
    );
}

export default Filter;