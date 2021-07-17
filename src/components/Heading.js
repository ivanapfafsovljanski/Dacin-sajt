import React from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";

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

                    
                        <NavLink className="link" activeClassName="navActiveLink" exact to="/products">Proizvodi</NavLink>

                       

                    <NavLink className="link" activeClassName="navActiveLink" exact to="/aboutUs">O Nama</NavLink>
                    <NavLink className="link" activeClassName="navActiveLink" exact to="/contact">Kontakt</NavLink>

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/products" exact component={Products} />

                        {/*  /> */}

                        <Route path="/aboutUs" exact component={AboutUs} />
                        <Route path="/contact" exact component={Contact} />

                    </Switch>

                </Router>
            </nav>

        </div>
    )
}

export default Heading;
