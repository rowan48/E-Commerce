import ProductCard from '../Product/ProductCard';
import CartCard from '../Card/CartCard';
import UserContext from '../../App';
import React, {useContext, useEffect, useState} from "react";

let Cart=()=>{
    //console.log(props.product);
    //let item=0;
    let items=[10,11,12];
    let added_products = useContext(UserContext);
    console.log(added_products);

    //let count=0;
    // let added_products=JSON.parse(localStorage.getItem('product'));

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-around">
               {/* {
                added_products.map((product)=>{
                    
                    return <CartCard key={product.id} product={product} />;

                })
               } */}

            </div>
            <div>
                {
                    items.forEach(item => {
                        <p>{item}</p>
                        
                    }) 

                    
                }
                <p>Total:</p>
                {
                    
                }
            </div>

            
        </div>
    )
}
export default Cart;