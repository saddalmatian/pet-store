import './Product.css';
import Vong from '../../assets/images/VongThoCam.jpg';


function Product() {
    return (
        <div className="container product-container">
            <div className="row ms-5 ps-5 product-heading">
                <p className="mixin-font">Our Product</p>
                <p className="title">Must-Have Products For Your Pet</p>
            </div>
            <div className="row ms-5 ps-5">
                <div className="col-md-2 category">
                    <p className="category-heading">Product Categories</p>
                    <div className="category-item">
                        <p className="category-item__heading">Dog Supplies</p>
                        <ul>
                            <li className="category-item__link">Assessories</li>
                            <li className="category-item__link">Food</li>
                            <li className="category-item__link">Hygiene</li>
                        </ul>
                        <p className="category-item__heading">Cat Supplies</p>
                        <ul>
                            <li className="category-item__link">Assessories</li>
                            <li className="category-item__link">Food</li>
                            <li className="category-item__link">Hygiene</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md product-filter">
                            <p className="product-filter__heading">Sort by</p>
                            <button type="button" class="btn btn-primary product-filter__btn">Best Seller</button>
                            <button type="button" class="btn btn-primary product-filter__btn">New</button>
                            <div class="dropdown product-filter__dropdow">
                                <button class="btn btn-secondary dropdown-toggle product-filter__dropdow-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cost
                                </button>
                                <ul class="dropdown-menu product-filter__dropdow-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item product-filter__dropdow-item" href="#1">High to Low</a></li>
                                    <li><a class="dropdown-item product-filter__dropdow-item" href="#2">Low to High</a></li>
                                </ul>
                            </div>
                            <div class="">
                                <input class="form-control me-2 product-filter__search" type="search" placeholder="Search here..." aria-label="Search" />
                            </div>
                            <div className="product-filter__page">
                                <span className="product-filter__page-current">1</span>
                                /
                                <span className="product-filter__page-total">10</span>
                                <div className="filter-page__btn">
                                    <a href="#1"><i className="fas fa-angle-left filter-page__icon"></i></a>
                                    <a href="#1"><i className="fas fa-angle-right filter-page__icon"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md product">
                            <a href="#1" className="product-item">
                            <div class="product-item__img" style={{backgroundImage: `url(${Vong})`}} alt="product-img"></div>
                                <h4 className="product-item__name">Brocade necklace Brocade necklace</h4>
                                <div className="product-item__price">
                                    <div className="product-item__price-old">1.800.000đ</div>
                                    <div className="product-item__price-current">900.000đ</div>
                                </div>
                                <div className="product-item__action">
                                    <div className="product-item__action-rating">
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="product-item__star--gold fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div className="product-item__cart">
                                        <i class="fas fa-shopping-cart product-item__cart-icon"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;