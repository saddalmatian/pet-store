import React, { useState, useEffect } from 'react';
import './Category.css';
import CateItem from './CateItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Category() {
    const [productsTypes, setProductsTypes] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/product/get-all-product-type',

            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProductsTypes(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);

    return (
        <div className="col-md-2 category">
            <p className="category-heading">Danh mục sản phẩm</p>
            {productsTypes && productsTypes?.map((type, index) => (
                <Link
                    to={`/product-list/${type.PetTypeId}`}
                    key={index}
                    style={{ textDecoration: "none", color: "var(--black-color)" }}
                >
                    <CateItem 
                        heading={`Sản phẩm cho ${type.PetTypeName}`} 
                        items={type.ListType} 
                        petType={type.PetTypeId} 
                    />
                </Link>
            ))}
        </div>
    );
}

export default Category;