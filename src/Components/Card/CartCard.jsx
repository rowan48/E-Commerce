let CartCard=(props)=>{
    console.log(props);
    let product=props.product;
    console.log("product",product);
    //let item = props.item;
    //console.log(item);
    console.log(product);
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
    return(
        <div className=" py-4 text-center w-25 m-5 ">
        <div className="card card-width">
            <div  className="card-body place" style={data_style}>
                <div className=" d-flex justify-content-center" style={card_style}>
                </div>
                <h3 className="card-title p-3" >{product.name}</h3>
                <h4>{product.price}</h4>
                <h5>Items no: {product.quantity}</h5>
            </div>

        </div>

    </div>
    )
}
export default CartCard;