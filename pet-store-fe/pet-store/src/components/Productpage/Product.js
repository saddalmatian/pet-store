import './Product.css';
import Heading from '../Heading';
import Category from './Category';
import Filter from './Filter';
import ProductItem from './ProductItem';


function Product() {
    return (
        <div className="container product-container">
            <Heading />
            <div className="row ms-5 ps-5">
                <Category />
                <div className="col-md-10">
                    <div className="row">
                        <Filter />
                    </div>
                    <div className="row">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className="row">
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;