import './ProductDes.css';

function ProductDes( props ) {
    return (
        <div className="item-description">
            <p className="item-description__heading">Description</p>
            <p className="item-description__content">
                {props.content}
            </p>
        </div>
    );
}

export default ProductDes;