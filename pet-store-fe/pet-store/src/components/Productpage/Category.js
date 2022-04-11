import React from 'react';
import './Category.css';
import CateItem from './CateItem';
// import axios from 'axios';

function Category() {
    // const [productsTypes, setProductsTypes] = useState([]);

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/product/get-all-product-type',

    //         {
    //             headers: {
    //                 accept: 'application/json'
    //             }
    //         }
    //     )
    //         .then(res => setProductsTypes(res.data))
    //         .catch(err => console.log(JSON.stringify(err, null, 2)))
    // }, []);

    // console.log(productsTypes);
    return (
        <div className="col-md-2 category">
            <p className="category-heading">Product Categories</p>
            {/* {productsTypes.Listype && productsTypes.Listype?.map((type, index) => (
                <>
                <CateItem heading='Bird Supplies' items={type.Bird} key={type}/>
                <CateItem heading='Cat Supplies' items={type.Cat} key={type}/>
                <CateItem heading='Dog Supplies' items={type.Dog} key={type}/>
                </>
            ))} */}
            <CateItem heading='Cat Supplies' />
            <CateItem heading='Bird Supplies' />
        </div>
    );
}

export default Category;