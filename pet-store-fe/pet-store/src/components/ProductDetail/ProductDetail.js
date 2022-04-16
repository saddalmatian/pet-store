import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import Heading from '../Heading';
import Start from '../Start';
import ProductImg from './ProductImg';
import ProductDes from './ProductDes';
import Line from '../Line'
import Avt from '../../assets/images/VongThoCam.jpg';
import Comment from './Comment';
import SubComment from './SubComment';
import ProductItem from '../Productpage/ProductItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

function ProductDetail({ ...props }) {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/get-product-detail?product_id=${id}`,
            {
                headers: {
                    accept: 'applcation/json'
                }
            }
        )
            .then(res => setProduct(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [id]);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/comments/get-all-comments?product_id=${id}`,
            {
                headers: {
                    accept: 'applcation/json',
                    'authorization-token': localStorage.getItem('Token')
                }
            }
        )
            .then(res => setComments(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [id, comments]);

    function formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

    const [quantity, setQuantity] = useState(1);

    function handlePlus() {
        if (quantity < product.ProductQuantity) {
            setQuantity(
                quantity + 1
            )
        }
    }

    function handleMinus() {
        if (quantity > 1) {
            setQuantity(
                quantity - 1
            )
        }
    }

    const handleAddCart = (id, quantity) => {
        if (localStorage.getItem('Token')) {
            axios.post(`http://127.0.0.1:8000/bills/create-cart`,
                {
                    product_quantity: quantity,
                    product_id: id
                },
                {
                    headers: {
                        accept: 'applcation/json',
                        'authorization-token': localStorage.getItem('Token')
                    }
                }
            ).then(console.log('Ok'))
        } else {
            alert('Bạn cần đăng nhập trước khi thực hiện thao tác này!');
        }
    }

    const [cmt, setCmt] = useState('');

    const handleComment = (id, cmt) => {
        if (localStorage.getItem('Token')) {
            axios.post(`http://127.0.0.1:8000/comments/comment-on-product`,
            {
                ProductID: id,
                CommentMain: true,
                CommentRepTarget: "",
                CommentDetail: cmt
            },
                {
                    headers: {
                        accept: 'applcation/json',
                        'authorization-token': localStorage.getItem('Token')
                    }
                }
            ).then(setCmt(''));
        } else {
            alert('Bạn cần đăng nhập trước khi thực hiện thao tác này!');
        }
    }

    return (
        <>
            <Header />
            <div className="container product-detail">
                <Heading mixin="About item" title="Your Choice Is The Best Choice" />
                <div className="row">
                    <div className="col-md">
                        <div className="row">
                            <div className="row">
                                <p className="item-name">{product.ProductName}</p>
                                <div className="item-reaction">
                                    <Start value={product.RateStarNumber} />
                                    <p className="item-comment__total">{product.CommentAmounts} comments</p>
                                </div>
                            </div>
                            <ProductImg src={product.ListImages} />
                        </div>
                    </div>

                    <div className="col-md item-info">
                        <div className="item-wrap">
                            {product.ProductCost && <p className="item-price">{formatCash(product.ProductCost.toString())} VND</p>}

                            <div className="item-quantity__wrap">
                                <p className="item-quantity">Số lượng: </p>
                                <button type="button" className="item-btn__minus" onClick={handleMinus}>-</button>
                                <p className="item-quantity">{quantity}</p>
                                <button type="button" className="item-btn__plus" onClick={handlePlus}>+</button>
                            </div>
                            <p className="item-quantity__available-heading">Trong kho:
                                <span className="item-quantity__available-content">{product.ProductQuantity}</span>
                            </p>
                            <div>
                                <button type="button" className="item-btn__add-cart" onClick={handleAddCart}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>

                        <ProductDes content={product.ProductDescription} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-md">
                        <p className="item-review__heading">
                            Reviews & Comments
                        </p>
                        <Line />
                        <div className="comment-wrap">
                            <Start />
                            <p className="item-review__rating-num">({product.RateStarNumber})</p>
                            <p className="item-review__comment-total">{product.CommentAmounts} Comments</p>
                        </div>
                        <p className="item-review__comment-heading">Comment</p>
                        <input 
                            type="text" 
                            className="item-review__input-comment" 
                            onChange={(e) => setCmt(e.target.value)}
                            value={cmt}
                        >
                        </input>
                        <input 
                            type="button" 
                            className="item-review__input-btn" 
                            value="Gửi" 
                            onClick={() => handleComment(product.ProductID,cmt)}
                        ></input>
                    </div>
                </div>
                <Line />

                {comments.ListComments && comments.ListComments?.map((cmt, index) => (
                    cmt.CommentMain ?
                        <Comment avt={Avt} name={cmt.CommentorName} content={cmt.CommentDetail} key={index} /> :
                        <SubComment avt={Avt} name={cmt.CommentorName} content={cmt.CommentDetail} key={index} />
                ))}

                <p className="comment-load-more">Load more...</p>

                <div className="row item-list">
                    <div className="col-md">
                        <p className="item-list__heading">Customer Also Viewed</p>
                        <Line />
                    </div>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    );
}

export default ProductDetail;