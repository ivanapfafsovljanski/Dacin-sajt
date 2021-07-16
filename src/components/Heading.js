import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Honey from "./pages/Honey";
import HoneyProducts from "./pages/HoneyProducts";
import Drinks from "./pages/Drinks";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function Heading() {
    return (
        <div>
            <div className="title">
                <img className="titleImg" src="../img/pcela.ico" alt="company's logo" />
                <h1 className="headingTitle">"Jašin" pčelarsko gazdinstvo</h1>
            </div>
            <nav>
                <Router>
                    <Link to="/"><img className="logoInMenu" src="../img/mali-mali-logo.png" /></Link>
                    <NavLink className="link" activeClassName="navActiveLink" exact to="/">Početna</NavLink>

                    <div className="productsMenu">
                        <NavLink className="link" activeClassName="navActiveLink" exact to="/products">Proizvodi</NavLink>

                        {/* this is sub-menu */}
                        <div className="subLink">
                            <NavLink className="link" activeClassName="navActiveLink" exact to="/products/honey" >Med</NavLink>
                            <NavLink className="link" activeClassName="navActiveLink" exact to="/products/honeyProducts">Pčelinji Proizvodi</NavLink>
                            <NavLink className="link" activeClassName="navActiveLink" exact to="products/drinks">Pića</NavLink>
                        </div>
                    </div>

                    <NavLink className="link" activeClassName="navActiveLink" exact to="/aboutUs">O Nama</NavLink>
                    <NavLink className="link" activeClassName="navActiveLink" exact to="/contact">Kontakt</NavLink>

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/products" exact component={Products} />

                        <Route path="/products/honey" component={Honey} />
                        <Route path="/products/honeyProducts" component={HoneyProducts} />
                        <Route path="/products/drinks" component={Drinks} />

                        <Route path="/aboutUs" exact component={AboutUs} />
                        <Route path="/contact" exact component={Contact} />

                    </Switch>

                </Router>
            </nav>

        </div>
    )
}

export default Heading;
