import {React,useState} from 'react';
import './ProductCard.css';
import {useContext} from "react";
import{UserContext} from "../../Components/UserContext"

const ProductCard=({product})=>{
    const {cartItems,setCartItems,addToCart}=useContext(UserContext);
    console.log("value",cartItems);
    const calculate_charges=(e)=>{
        const productItem=cartItems.findIndex((p)=>
            p.name===product.name
        )
        console.log(productItem);
        if(productItem!==-1){
            setCartItems((previous)=>{
                const newItem=[...previous];
                newItem[productItem].quantity++;
                return newItem;
            })
        }else{
            console.log("else");
            const cartItemProduct={
                ...product,
                quantity:1
            }
            console.log(cartItemProduct);
            setCartItems((previous)=>{
               return previous.concat([cartItemProduct]);
            })

        }
        console.log(cartItems);
    }
    const card_style={
        backgroundImage: `url(${product.img})` ,
        width:"100%",
        height:"200px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

    }
    const data_style={
        overflow:"hidden"
    }
    const rect_style={
        backgroundColor:"red",
        width: "50%",
        margin:"25%"
    }
    return(

        <div className=" py-4 text-center w-25 m-5 ">
            <div className="card card-width">
                <div  className="card-body place" style={data_style}>
                    <div className=" d-flex justify-content-center" style={card_style}>
                    </div>
                    <h4 className="card-title p-3" >{product.name}</h4>
                    <h6>{product.price}</h6>
                    <div className="rounded-pill" style={rect_style}>
                        {product.promotions}
                    </div>
                    <div className="d-flex justify-content-around">
                        <button  className="btn btn-primary rounded-pill" onClick={calculate_charges}> Add to Cart</button>
                    </div>
                </div>

            </div>

        </div>

    )
}
export default ProductCard;
