import React from "react";

function Card(props) {
    console.log(props);
    return (

        <div className="cardFrame">
            <h2 className="cardTitle">{props.name}</h2>
            <div className="imgCard">
                <img className="imgInCard" src={props.image} alt="product image" />
            </div>
            <div className="cardText">
                <h3 className="package">{props.package}</h3>
                <h3 className="price">{props.price}<span> din</span></h3>

            </div>
        </div>

    )
}
export default Card;