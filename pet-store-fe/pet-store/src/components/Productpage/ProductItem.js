import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';
import Start from '../Start';


function ProductItem( {...props} ) {
    return (
        <div className="col-md product">
            <Link to={`/product_detail/${props.ProductID}`} className="product-item">
                <div className="product-item__img" style={{ backgroundImage: `url(${props.ImageSource})` }} alt="product-img"></div>
                <h4 className="product-item__name">{props.ProductName}</h4>
                <div className="product-item__price">
                    <div className="product-item__price-old">1.800.000đ</div>
                    <div className="product-item__price-current">{props.ProductCost}</div>
                </div>
                <div className="product-item__action">
                    <Start />
                    <div className="product-item__cart">
                        <i className="fas fa-shopping-cart product-item__cart-icon"></i>
                    </div>
                </div>
            </Link >
        </div>
    );
}

export default ProductItem;