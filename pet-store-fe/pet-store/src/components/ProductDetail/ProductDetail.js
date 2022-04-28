import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import Heading from '../Heading';
import Start from '../Start';
import ProductImg from './ProductImg';
import ProductDes from './ProductDes';
import Line from '../Line'
import Avt from '../../assets/images/avt.png';
import Comment from './Comment';
import ProductItem from '../Productpage/ProductItem';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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

    function getProductDetail() {
        axios.get(`http://127.0.0.1:8000/product/get-product-detail?product_id=${id}`,
            {
                headers: {
                    accept: 'applcation/json'
                }
            }
        )
            .then(res => setProduct(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }

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
    }, [id]);

    function getComment() {
        axios.get(`http://127.0.0.1:8000/comments/get-all-comments?product_id=${id}`,
            {
                headers: {
                    accept: 'applcation/json',
                    'authorization-token': localStorage.getItem('Token')
                }
            }
        )
            .then(res => setComments(res.data))
            .then(getProductDetail())
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }

    function formatCash(str) {
        return str.toString().split('').reverse().reduce((prev, next, index) => {
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
    const billID = localStorage.getItem('BillID');

    const handleAddCart = () => {
        let url = `http://127.0.0.1:8000/bills/add-product-to-cart?product_quantity=${quantity}&product_cost=${cost}&bill_id=${billID}&product_id=${id}`;
        if (product.Promotional && product.Promotional.promotional_id) {
            url.concat(`&promotional_id=${product.Promotional.promotional_id}`)
        }
        if (localStorage.getItem('Token')) {
            axios.post(url, '',
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

    const [cmt, setCmt] = useState('');

    const handleComment = (id, cmt) => {
        
        if (localStorage.getItem('Token')) {
            if(!cmt) {
                alert("Bạn chưa điền bình luận");
                return;
            }
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
            ).then(getComment())
                .then(getProductDetail())
                .then(setCmt(''))
        } else {
            alert('Bạn cần đăng nhập trước khi thực hiện thao tác này!');
        }
    }

    const [listRelated, setListRelated] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/get-random-product?product_type_id=${product.ProductTypeID}`,
            {
                headers: {
                    accept: 'applcation/json'
                }
            }
        )
            .then(res => setListRelated(res.data))
            .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, [product.ProductTypeID]);

    function discount(price, sale) {
        return price * (1 - sale / 100);
    }

    const [rateSuccess, setRateSuccess] = useState(false);

    function handleRating(idProduct, rateStar) {
        if (localStorage.getItem('Token')) {
            axios.post(`http://127.0.0.1:8000/rates/rate-a-product`, {
                RateStarNumber: rateStar,
                ProductID: idProduct
            },
                {
                    headers: {
                        accept: 'applcation/json',
                        'authorization-token': localStorage.getItem('Token')
                    }
                }
            )
                .then(function (res) {
                    setRateSuccess(true);
                    // getProductDetail();
                    alert('Đánh giá sản phẩm thành công!');
                })
                .then(getProductDetail())
                // .then(alert('Đánh giá sản phẩm thành công!'))
                .then(setRateSuccess(true))
                .catch(function (err) {
                    if (!err?.response) {
                        alert('Máy chủ hiện không phản hồi!')
                    } else {
                        alert('Bạn đã đánh giá sản phẩm này rồi!')
                    }
                })
        } else {
            alert('Bạn cần đăng nhập để thực hiện thao tác này!');
        }
    }

    const cost = product.Promotional && product.Promotional.promotional_sale ? discount(product.ProductCost, product.Promotional.promotional_sale) : product.ProductCost;

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
                            {product.Promotional &&
                                product.Promotional.promotional_id ? (product.ProductCost &&
                                    <>
                                        <div className="item-price__old">{formatCash(product.ProductCost)}đ</div>
                                        <div className="item-price">{formatCash(discount(product.ProductCost, product.Promotional.promotional_sale))} VND</div>
                                    </>
                            ) : (product.ProductCost &&
                                <div className="item-price">{formatCash(product.ProductCost)} VND</div>
                            )}
                            <p className="item-quantity__available-heading">Thương hiệu:
                                <span className="item-quantity__available-content">{product.BrandName}</span>
                            </p>
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
                                <button type="button" className="item-btn__add-cart" onClick={() => handleAddCart()}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>

                        <ProductDes content={product.ProductDescription} />
                    </div>

                </div>

                <div className="row">
                    <div className="col-md">
                        <p className="item-review__heading">
                            Đánh giá & Bình luận
                        </p>
                        <Line />
                        <div className="comment-wrap">
                            <i className="star-gold fas fa-star"></i>
                            <p className="item-review__rating-num">({product.RateStarNumber})</p>
                            <p className="item-review__comment-total">{product.CommentAmounts} Bình luận</p>
                        </div>

                        {rateSuccess === false ?
                            <div className="product-rating">
                                <p className="item-review__comment-heading">Đánh giá</p>
                                <div className="comment-wrap">
                                    <button className='rate-btn' onClick={() => handleRating(product.ProductID, 1)}>
                                        <i className="product-item__star fas fa-star"></i>
                                    </button>
                                    <button className='rate-btn' onClick={() => handleRating(product.ProductID, 2)}>
                                        <i className="product-item__star fas fa-star"></i>
                                    </button>
                                    <button className='rate-btn' onClick={() => handleRating(product.ProductID, 3)}>
                                        <i className="product-item__star fas fa-star"></i>
                                    </button>
                                    <button className='rate-btn' onClick={() => handleRating(product.ProductID, 4)}>
                                        <i className="product-item__star fas fa-star"></i>
                                    </button>
                                    <button className='rate-btn' onClick={() => handleRating(product.ProductID, 5)}>
                                        <i className="product-item__star fas fa-star"></i>
                                    </button>
                                </div>
                            </div> :
                            <p className="rate-success">Sản phẩm này đã được bạn đánh giá</p>
                        }

                        <p className="item-review__comment-heading">Bình luận</p>
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
                            onClick={() => handleComment(product.ProductID, cmt)}
                        ></input>
                    </div>
                </div>
                <Line />

                {comments.ListComments && comments.ListComments?.map((cmt, index) => (
                    <Comment avt={Avt} name={cmt.CommentorName} content={cmt.CommentDetail} rate={cmt.RateStarNumber} key={index} />
                ))}

                {/* <p className="comment-load-more">Tải thêm...</p> */}

                <div className="row item-list">
                    <div className="col-md">
                        <p className="item-list__heading">Các sản phẩm cùng loại</p>
                        <Line />
                    </div>

                    <div className="d-flex gap-2 align-items-center">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 2fr)' }}>
                            {listRelated && listRelated?.map((product, index) => (
                                <div className="row d-flex gap-2" key={index}>
                                    <Link to={`/product_detail/${product.ProductID}`} style={{ textDecoration: "none" }}>
                                        <ProductItem  {...product} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;