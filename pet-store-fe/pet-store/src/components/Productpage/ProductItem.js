import React from 'react';
import './ProductItem.css';
import Vong from '../../assets/images/VongThoCam.jpg';
import Start from '../Start';


function ProductItem( {...props} ) {
    return (
        <div className="col-md product">
            <a href="#1" className="product-item">
                <div class="product-item__img" style={{ backgroundImage: `url(${Vong})` }} alt="product-img"></div>
                <h4 className="product-item__name">{props.ProductName}</h4>
                <div className="product-item__price">
                    <div className="product-item__price-old">1.800.000đ</div>
                    <div className="product-item__price-current">{props.ProductCost}</div>
                </div>
                <div className="product-item__action">
                    <Start />
                    <div className="product-item__cart">
                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ProductItem;