import ProductCard from '../Product/ProductCard';
import CartCard from '../Card/CartCard';
import{UserContext} from "../../Components/UserContext"
import React, {useContext, useEffect, useState} from "react";


let Cart=()=>{
    let items=[10,11,12];
    const {cartItems,setCartItems,addToCart}=useContext(UserContext);
    console.log(cartItems);
    return (
        <div>
            <div className="d-flex flex-wrap justify-content-around">
               {
                cartItems.map((product)=>{
                    
                    return <CartCard key={product.id} product={product} />;

                })
               }

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