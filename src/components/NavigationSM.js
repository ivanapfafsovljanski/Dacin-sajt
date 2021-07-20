import React, {useState} from "react";
import Heading from "./Heading";

function NavigationSM(){

    const[isDisplayed, setDisplayMenu] = useState(false);

    function displayingMenu(){
        setDisplayMenu((privValue) => {
            return !privValue;
        })
        
        
    }
    


    return(
        <div>
            <div className="hamburgerContainer">
                <img className="smallScr" src="../img/mali-mali-logo.png" />
                <img className="hamburgerMenu" src="../img/hamburger.ico" onClick={displayingMenu} />
                
            </div>

            <div className="homeImgContainer">
                <img className="homeImg" src="../img/bckg.jpg" alt="honey products" />
            </div>

            <div style={{display: isDisplayed ? "block" : "none"}} className="manuSm">
                <Heading />
            </div>

        </div>
    )


}

export default NavigationSM;