import './PageControl.css';

function PageControl( props ) {
    return (
        <div className="product-filter__page">
            <span className="product-filter__page-current">{props.current}</span>
            /
            <span className="product-filter__page-total">{props.total}</span>
            <div className="filter-page__btn">
                <a href="#1"><i className="fas fa-angle-left filter-page__icon"></i></a>
                <a href="#1"><i className="fas fa-angle-right filter-page__icon"></i></a>
            </div>
        </div>
    );
}
export default PageControl;