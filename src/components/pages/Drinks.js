import React from "react";
import Card from "../Card";
import drinksList from "../productLists/drinksList";

function Drinks() {
    return (
        <div>
            <div className="productContainer">

                <img src="../img/drinks.jpg" className="productImg" />
                <h1 className="productsTitle">Pića</h1>
            </div>
            <div className="cardContainer">
                {drinksList.map(item => {
                    return (
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
export default Drinks;
