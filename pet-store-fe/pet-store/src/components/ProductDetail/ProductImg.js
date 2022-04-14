import React, { useState } from 'react';
import './ProductImg.css';


function ProductImg( props ) {
    const [index, setIndex] = useState(0);

    const handleClick = (e) => {
        setIndex(e);
    }
    return (
        <div className="row">
            <div className="col-md-2 img-more">
                {props.src && props.src?.map((img, index) => (
                    <img onClick={()=>handleClick(index)} className="img-item" src={img.ImageSource} alt="Image_1" key={index}></img>
                ))}
                {/* <img className="img-item__two" src={Item} alt="Image_2"></img>
                <img className="img-item__three" src={Item} alt="Image_3"></img> */}
            </div>
            <div className="col-md">
                <img className="img-current" src={props.src && props.src[index].ImageSource} alt="Image_current"></img>
            </div>
        </div>
    );
}

export default ProductImg;