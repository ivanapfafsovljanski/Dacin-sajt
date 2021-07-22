import React, {useState} from "react";
import Heading from "./Heading";
import {CSSTransition, TransitionGroup} from "react-transition-group";


function NavigationSM(){

    const[isDisplayed, setDisplayMenu] = useState(false);

    function displayingMenu(){
        setDisplayMenu((privValue) => {
            return !privValue;
        })
        subMenuClosed();
        
    }
    const[isSubMenoShowen, setSubMenu] = useState(false);

    //toggle between opened and closed subMenu (by clicking on Proizvodi link)
    function showSubMenu(){
        setSubMenu((privValue) =>{
            return !privValue;
        })
    }
    // closes the subMenu when clicking on any other menu link
    function subMenuClosed(){
        setSubMenu(() => {
            return false;
        })
    }
    


    return(
        <div>
            <div className="hamburgerContainer">
                <img className="smallScr" src="../img/mali-mali-logo.png" onClick={displayingMenu} />
                <img className="hamburgerMenu" src="../img/hamburger.ico" onClick={displayingMenu} />
                
            </div>

            <div className="homeImgContainer" >
                <img className="homeImg" src="../img/bckg.jpg" alt="honey products" />
            </div>

            <CSSTransition  timeout={200} classNames="example">
            <div style={{display: isDisplayed ? "block" : "none"}} className="manuSm">
                <Heading showingSub={showSubMenu} closingSub={subMenuClosed} isSubShown={isSubMenoShowen} />  
            </div>
            </CSSTransition>
        </div>
    )


}

export default NavigationSM;