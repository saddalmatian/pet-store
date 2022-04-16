import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import Heading from '../Heading';
import Category from './Category';
import Filter from './Filter';
import ProductItem from './ProductItem';
import Header from '../Header/Header';


function Product() {
    const { idType } = useParams();
    const { petType } = useParams();
    const { mostSold } = useParams();
    const { isDesc } = useParams();
    const { isAsc } = useParams();
    const { searchText } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        let link = 'http://127.0.0.1:8000/product/get-all-products/';

        if (idType) {
            const path = `?product_type_id=${idType}`;
            link = link.concat(path);
        };

        if (petType) {
            const path = `?pet_type_id=${petType}`;
            link = link.concat(path);
        };

        if (mostSold) {
            const path = `?most_sold=${mostSold}`;
            link = link.concat(path);
        };

        if (isDesc) {
            const path = `?order_by=${isDesc}`;
            link = link.concat(path);
        };

        if (isAsc) {
            const path = `?order_by=${isAsc}`;
            link = link.concat(path);
        };

        axios.post(link,
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProducts(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [idType, petType, mostSold, isDesc, isAsc, searchText])

    return (
        <>
            <Header />
            <div className="container product-container">
                <Heading mixin="Our Product" title="Các Sản Phẩm Cần Thiết Cho Thú Cưng Của Bạn" />
                <div className="row">
                    <Category />
                    <div className="col-md-10">
                        <div className="row " >
                            <Filter setProducts={setProducts}/>
                        </div>
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 2fr)' }}>
                                {products.map((product, index) =>
                                    <Link to={`/product_detail/${product.ProductID}`} key={index} style={{ textDecoration: "none" }}>
                                        <ProductItem  {...product} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;