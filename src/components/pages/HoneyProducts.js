import { timers } from "jquery";
import React from "react";
import Card from "../Card";
import honeyProductList from "../productLists/honeyProductsList";

function HoneyProducts() {
    return (
        <div>
            <div className="productContainer">
                <h1 className="productsTitle">Pčelinji proizvodi</h1>
                <img src="../img/propolis.jpg" className="productImgRght" />

            </div>
            <div className="cardContainer">
                {honeyProductList.map((item) =>{
                    return(
                        <Card 
                        key={item.productId}
                        name={item.productName}
                        image={item.productImg}
                        price={item.productPrice}
                        package={item.productPackage}
                        text={item.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HoneyProducts;