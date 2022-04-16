import React from 'react';
import './ProductItem.css';
import Start from '../Start';


function ProductItem({ ...props }) {

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    function discount(price, sale) {
        return price * (1 - sale / 100);
    }

    return (
        <div className="col-md product">
            <div className="product-item">
                <div className="product-item__img" style={{ backgroundImage: `url(${props.ImageSource})` }} alt="product-img"></div>
                <h4 className="product-item__name">{props.ProductName}</h4>
                <div className="product-item__price">
                    {props.Promotional &&
                        props.Promotional.promotional_id ? (props.ProductCost &&
                            <>
                                <div className="product-item__price-old">{formatCash(props.ProductCost.toString())}đ</div>
                                <div className="product-item__price-current">{formatCash(discount(props.ProductCost, props.Promotional.promotional_sale))}đ</div>
                            </>
                    ) : (props.ProductCost &&
                        <div className="product-item__price-current">{formatCash(props.ProductCost)}đ</div>
                    )
                    }
                </div>
                <div className="product-item__action">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Start value={props.RateStarNumber} />
                        <p className="sold-value">Đã bán {props.ProductSold}</p>
                    </div>
                    <div className="product-item__cart">
                        <i className="fas fa-shopping-cart product-item__cart-icon"></i>
                    </div>
                </div>
            </div >
            {props.Promotional && props.Promotional.promotional_id ? (
                <div className="product-item__sale-off">
                    <span className="product-item__sale-off-percent">{props.Promotional.promotional_sale}%</span>
                    <p className="product-item__sale-off-label">GIẢM</p>
                </div>) : null
            }

        </div>
    );
}

export default ProductItem;