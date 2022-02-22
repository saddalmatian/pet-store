import './ProductItem.css';
import Vong from '../../assets/images/VongThoCam.jpg';


function ProductItem() {
    return (
        <div className="col-md product">
            <a href="#1" className="product-item">
                <div class="product-item__img" style={{ backgroundImage: `url(${Vong})` }} alt="product-img"></div>
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
    );
}

export default ProductItem;