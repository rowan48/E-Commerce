import ProductCard from "../Product/ProductCard";
import {useEffect, useState} from "react";
import axios from "axios";


let Home =()=>{
    let count=0;



    const [products,setProducts]=useState([
    ])
    useEffect(()=>{
        axios
            .get(" http://localhost:4000/products", {

            })
            .then((res) => {
                console.log("jjjjjjj")
                console.log(res);

                setProducts(res.data);

            })
            .catch((res) => {
                console.log(res);

                //setPlayer(res.data);

            });
    },[])

    console.log(products)
    return (

        <div>
            {/*<NavBar></NavBar>*/}
            <div className="d-flex flex-wrap justify-content-around
                     ">
                {products.map((product) => {
                    console.log(count++,product)
                    return <ProductCard key={product.id} product={product}/>;
                })}
            </div>
        </div>

    );

}
export default Home;
