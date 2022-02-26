import './ProductDetail.css';
import Heading from '../Heading';
import Start from '../Start';
import ProductImg from './ProductImg';
import DropdownItem from '../DropdownItem';
import ProductDes from './ProductDes';
import Line from '../Line'
import Avt from '../../assets/images/VongThoCam.jpg';
import Comment from './Comment';
import SubComment from './SubComment';
import ProductItem from '../Productpage/ProductItem';

function ProductDetail() {
    return (
        <div className="container product-detail">
            <Heading mixin="About item" title="Your Choice Is The Best Choice" />
            <div className="row">
                <div className="col-md">
                    <div className="row">
                        <div className="row">
                            <p className="item-name">Blued dog bag A10, 28"L x 28"W</p>
                            <div className="item-reaction">
                                <Start />
                                <p className="item-comment__total">100 Reviews</p>
                            </div>
                        </div>
                        <ProductImg />
                    </div>
                </div>

                <div className="col-md item-info">
                    <div className="item-wrap">
                        <p className="item-price">200.000đ</p>
                        <div className="item-size__wrap">
                            <p className="item-size">Size:</p>
                            <div class="dropdown item-btn__dropdow">
                                <button class="btn btn-secondary dropdown-toggle item-btn__dropdow-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Size
                                </button>
                                <ul class="dropdown-menu item-btn__dropdow-menu" aria-labelledby="dropdownMenuButton1">
                                    <DropdownItem title="S" />
                                    <DropdownItem title="M" />
                                    <DropdownItem title="L" />
                                </ul>
                            </div>
                        </div>
                        <div className="item-color__wrap">
                            <p className="item-color">Color:</p>
                            <div class="dropdown item-btn__dropdow">
                                <button class="btn btn-secondary dropdown-toggle item-btn__dropdow-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Color
                                </button>
                                <ul class="dropdown-menu item-btn__dropdow-menu" aria-labelledby="dropdownMenuButton1">
                                    <DropdownItem title="Blue" />
                                    <DropdownItem title="Yellow" />
                                    <DropdownItem title="Red" />
                                </ul>
                            </div>
                        </div>

                        <div className="item-quantity__wrap">
                            <p className="item-quantity">Quantity: </p>
                            <button type="button" class="item-btn__plus">-</button>
                            <p className="item-quantity">1</p>
                            <button type="button" class="item-btn__minus">+</button>
                        </div>
                        <p className="item-quantity__available-heading">Available:
                            <span className="item-quantity__available-content"> 30</span>
                        </p>
                        <div>
                            <button type="button" class="item-btn__add-cart">Add to cart</button>
                        </div>
                    </div>

                    <ProductDes content="EveryYay Grey Memory Foam Lounger Dog Bed offers your pet ultimate support as 
                they stretch out. Its channeled chipped memory foam molds to your pet's body for a custom fit experience 
                every time they lay down to rest. Lounger silhouette is perfect for dogs that love to stretch and sprawl out
                in their sleep. Filled with shredded memory foam that molds to your pet's body to provide orthopedic
                support and added comfort. Faux leather handle and accents. Removable machine washable cover." />
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
                        <p className="item-review__rating-num">4.8</p>
                        <p className="item-review__comment-total">100+ Comments</p>
                    </div>
                    <p className="item-review__comment-heading">Comment</p>
                    <input type="text" className="item-review__input-comment"></input>
                    <input type="button" className="item-review__input-btn" value="Send"></input>
                </div>
            </div>
            <Line />

            <Comment avt={Avt} name="Cris" content="I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days.I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days." />

            <SubComment avt={Avt} name="Cris" content="I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days.I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days." />

            <Comment avt={Avt} name="Cris" content="I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days." />

            <Comment avt={Avt} name="Cris" content="I bought this for
                            my 25 pound puppy but it lost the shaping and fluff to
                            it after just a few days." />

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
    );
}

export default ProductDetail;