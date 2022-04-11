import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import Heading from '../Heading';
import Category from './Category';
import Filter from './Filter';
import ProductItem from './ProductItem';


function Product() {
    const { idType } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/product/get-all-products',
            {
                ProductTypeID: idType
            },
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
            .then(res => setProducts(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [idType])

    return (
        <div className="container product-container">
            <Heading mixin="Our Product" title="Các Sản Phẩm Cần Thiết Cho Thú Cưng Của Bạn" />
            <div className="row">
                <Category />
                <div className="col-md-10">
                    <div className="row">
                        <Filter />
                    </div>
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 2fr)' }}>
                            {/* <Routes> */}
                                {products.map((product, index) =>
                                    // <Route path={`/product_detail/${product.ProductID}`} element={<ProductDetail />}>
                                    <Link to={`/product_detail/${product.ProductID}`} key={index} style={{textDecoration: "none"}}>
                                        <ProductItem  {...product} />
                                    </Link>
                                    // </Route>
                                )}
                            {/* </Routes> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;