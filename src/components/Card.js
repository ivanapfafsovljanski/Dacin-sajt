import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'; 

function Card(props) {
    // console.log(props);
    //seting the state for card content is it img or text
    const [cardContent, setCartContent] = useState("img");

    function changeCardContent(){

        setCartContent(prevVelue => {
            if (prevVelue === "img"){
                return "text"
            }
            if (prevVelue === "text"){
                return "img"
            }
        })
    }


    return (

        <div className="cardFrame">
            <h2 className="cardTitle">{props.name}</h2>
{/* animating card */}
        
            <div className="imgCard" onClick={changeCardContent}>
            <SwitchTransition>
            <CSSTransition
            key={cardContent}
            timeout={500}
            classNames={"cardCont"}
            >
                <>
                {/* rendering componet depending on state */}
                {cardContent === "img" && <img className="imgInCard cardCont" src={props.image} alt="product image" />}
                {cardContent === "text" && <div className="ptoductText cardCont">
                    <h3>{props.name}</h3>
                    <p>{props.text}</p>
                </div>}
                </>
                </CSSTransition>
            </SwitchTransition>
            </div>
            
            <div className="cardText">
                <h3 className="package">{props.package}</h3>
                <h3 className="price">{props.price}<span> din</span></h3>

            </div>
        </div>

    )
}
export default Card;