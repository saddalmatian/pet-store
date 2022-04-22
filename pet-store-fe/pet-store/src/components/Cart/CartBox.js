import axios from "axios";
import React, { useEffect, useState } from "react";

function CartBox({ ...props }) {

    const [quantity, setQuantity] = useState(props.product.ProductQuantity);
    const [total, setTotal] = useState(props.product.ProductTotalCost);
    const billID = localStorage.getItem('BillID');
    const token = localStorage.getItem('Token');

    // console.log(props);
    // console.log(props.product.ProductQuantity);

    const article = {
        "list_product": [
            {
              "ProductCost": props.product.ProductCost,
              "PromotionalID": props.product.PromotionalID,
              "ProductQuantity": quantity,
              "ProductID": props.product.ProductID,
              "BillID": billID
            }
          ],
          "bill_id": billID
    }

    // console.log(article);

     function handlePlus() {
        if (quantity < props.product.ProductOriginalQuantity) {
            const temp = quantity+1;
             update(temp);
            
        }

        // axios.put(`http://127.0.0.1:8000/bills/update-cart`, article,{
        //     headers: {
        //         accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         'authorization-token': token
        //     }
        // })
        // .catch(function (err) {
        //     console.log(JSON.stringify(err, null, 2));
        // })
    }

     function handleMinus() {
        if (quantity > 1) {
            const temp = quantity-1;

             update(temp);
        
        }
        // axios.put(`http://127.0.0.1:8000/bills/update-cart`, article,
        // {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'authorization-token': token
        //     }
        // })
        // .catch(function (err) {
        //     console.log(JSON.stringify(err, null, 2));
        // })

        // window.location.reload();
    }

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/bills/remove-product-from-cart?bill_id=${billID}&product_id=${id}`,
            {
                headers: {
                    accept: 'application/json',
                    'authorization-token': token
                }
            },
        )
            .then(window.location.reload())
            .catch(function (err) {
                console.log(JSON.stringify(err, null, 2));
            })
    }

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }


    const update = (temp) => {
        console.log(temp)
        axios.put(`http://127.0.0.1:8000/bills/update-cart`,{
            "list_product": [
                {
                  "ProductCost": props.product.ProductCost,
                  "PromotionalID": props.product.PromotionalID,
                  "ProductQuantity": temp,
                  "ProductID": props.product.ProductID,
                  "BillID": billID
                }
              ],
              "bill_id": billID
        },{
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization-token': token
            }
        }).then(setQuantity(temp))
        .then(()=>props.totalCost(temp))
        .catch(function (err) {
            console.log(JSON.stringify(err, null, 2));
        })
    };

    return (
        <>
            {
                <div className="cart-box" >
                    <div className="box-product">
                        <div className="box-product__image">
                            <img src={props.product.ImageSource} alt="product_img" className="box-product__img"></img>
                        </div>
                        <div className="box-product__info">
                            <p className="box-product__name">{props.product.ProductName}</p>
                            <p className="box-product__price">{formatCash(props.product.ProductCost)}</p>
                            <p className="box-product__delete" onClick={() => handleDelete(props.product.ProductID)}>Delete</p>
                        </div>
                        <div className="box-product__quantity">
                            <p className="box-product__label">Số lượng</p>
                            <div className="box-product__action">
                                <button type="button" className="box-product-btn__minus" onClick={() => handleMinus()}>-</button>
                                <p className="box-product-quantity__num">{quantity}</p>
                                <button type="button" className="box-product-btn__plus" onClick={() => handlePlus()}>+</button>
                            </div>
                        </div>
                        <div className="box-product__subtotal">
                            <p className="box-product__label">Thành tiền</p>
                            <p className="box-product__subtotal-amount">{formatCash(quantity * props.product.ProductCost)}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CartBox;