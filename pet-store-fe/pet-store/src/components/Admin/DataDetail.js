import React,{useState, useEffect} from 'react';
import axios from 'axios';


    function DataDetail(props){
        const [products, setProducts] = useState();
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/product/get-product-detail?product_id=${props.product.ProductID}`,
            {
                headers: {
                    accept: 'application/json'
                }
            }
        )
        .then(res => {setProducts(res.data);
        console.log(products)})
        .catch(err => console.log(JSON.stringify(err, null, 2)))
    }, []);
    products.map((product, index) =>{return(
         {
             id: product.ProductID,
         name : product.ProductName,
        }



    )});
        return(
            <form>
            

            <div className="modal-content form-group d-flex row border-0 gap-4 ">
                    <input type="text" className="form-control-lg border " value={this.id} />
                    <input type="text" className="form-control-lg border" placeholder="Brand name"/>
                    <input type="text" className="form-control-lg border" placeholder="Cost"/>
                    <input type="file" className="form-control-lg border"/>
                    <select className="form-control-lg border" >
                        <option value ="selected">Choose type...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <textarea className="form-control-lg border" placeholder="Enter your description..." ></textarea>
                    <select className="form-control-lg border" >
                        <option value ="selected">Choose pet type...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
            </div>

        </form>  
        );
    }
    export default DataDetail;
