import React from 'react';
import './Category.css';
import CateItem from './CateItem';

function Category() {
    return (
        <div className="col-md-2 category">
            <p className="category-heading">Product Categories</p>
            <CateItem heading='Dog Supplies' />
            <CateItem heading='Cat Supplies' />
        </div>
    );
}

export default Category;