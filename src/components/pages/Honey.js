import React from "react";
import Card from "../Card";
import honeyList from "../productLists/honeyList";

function Honey() {
    console.log(honeyList);
    return (
        <div>
            <div className="productContainer">

                <img src="../img/IMG_9326.jpg" className="productImg" />
                <h1 className="productsTitle">MED</h1>
            </div>
            <div className="cardContainer">
                {honeyList.map((item) => {
                    return (
                        <Card
                            key={item.productId}
                            name={item.productName}
                            image={item.productImg}
                            price={item.productPrice}
                            package={item.productPackage}
                            text={item.text}
                        />)
                })}
               
            </div>
        </div>
    )
}

export default Honey;