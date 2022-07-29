import ProductCard from "../Product/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
let ProductPage = () => {
  let count = 0;

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("")
  useEffect(() => {
    axios
      .get(" http://localhost:4000/products", {})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((res) => {
        console.log(res);

      });
  }, []);
  return (
    <div className=" justify-content-between m-5">
      <form className="mr-2 pr-5" style={{paddingLeft:"60%"}}>
        <input
          className=""
          name="name"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={event => setQuery(event.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div
        className="d-flex flex-wrap justify-content-around
                     "
      >
        {
            products.filter(prod=>{
                if(query===""){
                    return prod
                }else if (prod.name.toLowerCase().includes(query.toLowerCase())){
                    return prod
                }
            }).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
        }
      </div>
    </div>
  );
};
export default ProductPage;
