import React from 'react';
import './ProductItem.css';
import Start from '../Start';
import axios from 'axios';


function ProductItem({ ...props }) {
    const billID = localStorage.getItem('BillID');
    const id = props.ProductID;
    const quantity = 1;
    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    function discount(price, sale) {
        return price * (1 - sale / 100);
    }

    const handleAddCart = () => {
        let url = `http://127.0.0.1:8000/bills/add-product-to-cart?product_quantity=${quantity}&product_cost=${cost}&bill_id=${billID}&product_id=${id}`;
        if (props.Promotional && props.Promotional.promotional_id ) {
            url.concat(`&promotional_id=${props.Promotional.promotional_id}`)
        }
        if (localStorage.getItem('Token')) {
            axios.post(url,'',
                {
                    headers: {
                        accept: 'applcation/json',
                        'authorization-token': localStorage.getItem('Token')
                    }
                }
            )
                .then(alert('Thêm sản phẩm vào giỏ hàng thành công!'))
        } else {
            alert('Bạn cần đăng nhập trước khi thực hiện thao tác này!');
        }
    }

    const cost = props.Promotional && props.Promotional.promotional_sale ? discount(props.ProductCost, props.Promotional.promotional_sale) : props.ProductCost;

    return (
        <div className="col-md product">
            <div className="product-item">
                <div className="product-item__img" style={{ backgroundImage: `url(${props.ImageSource})` }} alt="product-img"></div>
                <h4 className="product-item__name">{props.ProductName}</h4>
                <div className="product-item__price">
                    {props.Promotional &&
                        props.Promotional.promotional_id ? (props.ProductCost &&
                            <>
                                <div className="product-item__price-old">{formatCash(props.ProductCost)}đ</div>
                                <div className="product-item__price-current">{formatCash(discount(props.ProductCost, props.Promotional.promotional_sale))}đ</div>
                            </>
                    ) : (props.ProductCost &&
                        <div className="product-item__price-current">{formatCash(props.ProductCost)}đ</div>
                    )}
                </div>
                <div className="product-item__action">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Start value={props.RateStarNumber} />
                        <p className="sold-value">Đã bán {props.ProductSold}</p>
                    </div>
                    <div className="product-item__cart" onClick={() => handleAddCart()}>
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