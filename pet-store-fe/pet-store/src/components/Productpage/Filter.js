import React from 'react';
import './Filter.css';
import '../Button.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Filter(props) {
    const { setProducts } = props;
    const isMostSold = true;
    const setIsDesc = 'desc';
    const setIsAsc = 'asc';

    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:8000/product/get-all-products/?search_text=${value}`,
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProducts(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }
    return (
        <div className="col-md product-filter">
            <p className="product-filter__heading">Sắp xếp theo</p>
            <div className="d-flex">
                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product/most_sold=${isMostSold}`}
                    className='button'
                >
                    Bán chạy
                </Link>

                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product/order_by=${setIsDesc}`}
                    className='button'
                >
                    Giá từ cao đến thấp
                </Link>

                <Link
                    style={{ textDecoration: "none", textAlign: "center" }}
                    to={`/product/order_by=${setIsAsc}`}
                    className='button'
                >
                    Giá từ thấp đến cao
                </Link>

                <form onSubmit={handleSubmit} >
                    <input
                        className="product-filter__search"
                        type="search" placeholder="Search here..."
                        aria-label="Search"
                        value={value}
                        onChange={handleOnChange}
                    />
                </form>
            </div>
        </div>
    );
}

export default Filter;