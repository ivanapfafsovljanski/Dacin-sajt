import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group';


function Navigation() {

    const [isDisplayed, setDisplayMenu] = useState(false);

    //displaying side manu on clicking hamburger
    function displayingMenu() {

        setDisplayMenu((privValue) => {
            // console.log("privValue je " + privValue + "!privVelue je " + !privValue)
            return !privValue;
        })
        subMenuClosed();

    }
    //Showing submenu
    const [isSubMenoShowen, setSubMenu] = useState(false);

    //toggle between opened and closed subMenu (by clicking on Proizvodi link)
    function showSubMenu() {
        setSubMenu((privValue) => {
            return !privValue;
        })
    }
    

    // closes the subMenu when clicking on any other menu link
    function subMenuClosed() {
        setSubMenu(false)
    }
    //closes the main menu when clicking on sublinks - open new page
    function menuClosed() {
        setDisplayMenu(false)
    }

    function closingAllmenues() {
        subMenuClosed();
        menuClosed();
    }
    console.log("isSubMenoShowen: " + isSubMenoShowen);
    console.log("isDisplayed: " + isDisplayed);
    return (
        <div>
            {/* Hamburger menu */}
            <div className="hamburgerContainer">
                <img className="smallScr" src="../img/mali-mali-logo.png" onClick={displayingMenu} />
                {/* OVDE JE ZAMENJENA IKONA */}
                {/* ZAMENJENA PUTANJA */}
                <img className="hamburgerMenu" src={require("/Images/hamburger.png")} onClick={displayingMenu} />
        {/* <img src={require('/images/image-name.png')} />  */}

            </div>

            <CSSTransition
                in={isDisplayed}
                timeout={{ enter: 500, exit: 800 }}
                classNames="manuSm"
            >

                <nav className="manuSm">

                    <Link to="/"><img onClick={subMenuClosed} className="logoInMenu" src="../img/mali-mali-logo.png" /></Link>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/">Početna</NavLink>

                    <NavLink onClick={showSubMenu} className="link" activeClassName="navActiveLink" exact to="/products">Proizvodi</NavLink>
                   <SwitchTransition>
                    <CSSTransition
                        key={isSubMenoShowen}
                        timeout={800}
                        classNames={"productsMenu"}
                        
                    >
                        <>
                        {isSubMenoShowen && <div className="productsMenu" >
                            <NavLink onClick={closingAllmenues} className="subLink first" activeClassName="subActiveLink" exact to="/products/Honey">Med</NavLink>
                            <NavLink onClick={closingAllmenues} className="subLink secund" activeClassName="subActiveLink" exact to="/products/HoneyProducts">Pčelinji proizvodi</NavLink>
                            <NavLink onClick={closingAllmenues} className="subLink third" activeClassName="subActiveLink" exact to="/products/Drinks">Pića</NavLink>

                            {/* <NavLink onClick={menuClosed} className="subLink third" activeClassName="subActiveLink" exact to="/products/Drinks">Pića</NavLink> */}
                        </div>}
                    </>
                    </CSSTransition>
                    </SwitchTransition>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/aboutUs">O Nama</NavLink>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/contact">Kontakt</NavLink>

                </nav>

            </CSSTransition>
            {isDisplayed && <div className="menuBacground" onClick={menuClosed}></div>}

        </div>
//style={{ display: isSubMenoShowen ? "block" : "none" }}


    )


}

export default Navigation;