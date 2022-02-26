import './ProductImg.css';
import Item from '../../assets/images/VongThoCam.jpg'


function ProductImg() {
    return (
        <div className="row">
            <div className="col-md-2 img-more">
                <img className="img-item__one" src={Item} alt="Image_1" ></img>
                <img className="img-item__two" src={Item} alt="Image_2"></img>
                <img className="img-item__three" src={Item} alt="Image_3"></img>
            </div>
            <div className="col-md">
                <img className="img-current" src={Item} alt="Image_current"></img>
            </div>
        </div>
    );
}

export default ProductImg;