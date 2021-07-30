import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';


function Navigation() {

    const [isDisplayed, setDisplayMenu] = useState(false);

    //displaying side manu on clicking hamburger
    function displayingMenu() {
        setDisplayMenu((privValue) => {
            return !privValue;
        })
        subMenuClosed();

    }
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



    return (
        <div>
            {/* Hamburger menu */}
            <div className="hamburgerContainer">
                <img className="smallScr" src="../img/mali-mali-logo.png" onClick={displayingMenu} />
                <img className="hamburgerMenu" src="../img/hamburger.ico" onClick={displayingMenu} />

            </div>

            <CSSTransition
                in={isDisplayed}
                timeout={{enter: 500, exit: 800}}
                classNames="manuSm"
                
            >
                 
                <nav className="manuSm">

                    <Link to="/"><img onClick={subMenuClosed} className="logoInMenu" src="../img/mali-mali-logo.png" /></Link>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/">Početna</NavLink>

                    <NavLink onClick={showSubMenu} className="link" activeClassName="navActiveLink" exact to="/products">Proizvodi</NavLink>

                    <div className="productsMenu" style={{ display: isSubMenoShowen ? "block" : "none" }}>
                        <NavLink onClick={menuClosed} className="subLink" activeClassName="subActiveLink" exact to="/products/Honey">Med</NavLink>
                        <NavLink onClick={menuClosed} className="subLink" activeClassName="subActiveLink" exact to="/products/HoneyProducts">Pčelinji proizvodi</NavLink>
                        <NavLink onClick={menuClosed} className="subLink" activeClassName="subActiveLink" exact to="/products/Drinks">Pića</NavLink>
                    </div>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/aboutUs">O Nama</NavLink>
                    <NavLink onClick={subMenuClosed} className="link" activeClassName="navActiveLink" exact to="/contact">Kontakt</NavLink>

                </nav>
           
        </CSSTransition>
        
        </div>
            // </div >
            
        
    )


}

export default Navigation;