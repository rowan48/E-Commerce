import React from 'react';
import './ProductCard.css';
import UserContext from '../../App';

let ProductCard=({product})=>{

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
    let item=0;
    
    function calculate_charges(e){

      
      console.log(e.target.value);
      <UserContext.Provider product={product}/>

      
    //     let my_arr=[]
    //     let my_arr2=[]
    //     let count =0;
    //    if (!localStorage.getItem('product')){
    //     let new_obj={
    //         product,
    //         count:1
    //     }
    //     my_arr.push(new_obj)
    //     localStorage.setItem('product',JSON.stringify(my_arr))
    //    }else{
    //     my_arr2=JSON.parse(localStorage.getItem('product'));
    //     my_arr2.map((productobj)=>{
    //         my_arr2.forEach((element,index)=>{
    //             if(element===productobj){
    //                 console.log("yes");
    //                 //element.count+=1
    //                 item+=1;
                    
    //                 //my_arr2.slice(index,1)
    //                 var my_arr2 = my_arr2.filter(function(value, index, arr){ 
    //                     return value==element;
    //                 });
    //             }
    //         })
    //     })
    //         let my_obj={
    //             product,
    //             count:item
    //         }

    //     my_arr2.push(my_obj)
    //     localStorage.setItem('product',JSON.stringify(my_arr2))
    //    } 
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
