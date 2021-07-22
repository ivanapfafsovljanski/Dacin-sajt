import React, {useState} from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Honey from "./pages/Honey";
import HoneyProducts from "./pages/HoneyProducts";
import Drinks from "./pages/Drinks";
import {CSSTransition, TransitionGroup} from "react-transition-group";


function Heading(props) {
//     const[isSubMenoShowen, setSubMenu] = useState(false);

// //toggle between opened and closed subMenu (by clicking on Proizvodi link)
// function showSubMenu(){
//     setSubMenu((privValue) =>{
//         return !privValue;
//     })
// }
// // closes the subMenu when clicking on any other menu link
// function subMenuClosed(){
//     setSubMenu(() => {
//         return false;
//     })
// }
//console.log(isSubMenoShowen);
    
    return (
        <div>
            <div className="title">
                <img className="titleImg" src="../img/pcela.ico" alt="company's logo" />
                <h1 className="headingTitle">"Jašin" pčelarsko gazdinstvo</h1>
            </div>
            {/* <CSSTransition  timeout={200} classNames="example"> */}
            <nav>
                
                    <Link to="/"><img onClick={props.closingSub} className="logoInMenu" src="../img/mali-mali-logo.png" /></Link>
                    <NavLink onClick={props.closingSub} className="link" activeClassName="navActiveLink" exact to="/">Početna</NavLink>
                    
                    <NavLink onClick={props.showingSub} className="link" activeClassName="navActiveLink" exact to="/products">Proizvodi</NavLink>
                   
                    <div className="productsMenu" style={{display: props.isSubShown ? "block" : "none"}}>
                        <NavLink className="subLink" activeClassName="subActiveLink" exact to="/products/Honey">Med</NavLink>
                        <NavLink className="subLink" activeClassName="subActiveLink" exact to="/products/HoneyProducts">Pčelinji proizvodi</NavLink>
                        <NavLink className="subLink" activeClassName="subActiveLink" exact to="/products/Drinks">Pića</NavLink>
                    </div>
                    <NavLink onClick={props.closingSub} className="link" activeClassName="navActiveLink" exact to="/aboutUs">O Nama</NavLink>
                    <NavLink onClick={props.closingSub} className="link" activeClassName="navActiveLink" exact to="/contact">Kontakt</NavLink>

                    <Switch>
                        <Route exact path="/" > <Home /> </Route>
                        <Route path="/products/Honey"> <Honey /></Route>
                        <Route path="/products/HoneyProducts"> <HoneyProducts /></Route>
                        <Route path="/products/Drinks"> <Drinks /> </Route>
                        <Route path="/products" ><Products /> </Route>
                        <Route path="/aboutUs" > <AboutUs /> </Route>
                        <Route path="/contact" ><Contact /> </Route>

                    </Switch>
                    
            </nav>
            
        </div>
    )
}

export default Heading;
