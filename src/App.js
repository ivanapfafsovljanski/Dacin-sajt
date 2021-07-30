import React from "react";
import "../style/style.scss";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import HomeScreen from "./components/pages/HomeScreen";
import Products from "./components/pages/Products";
import Honey from "./components/pages/Honey";
import HoneyProducts from "./components/pages/HoneyProducts";
import Drinks from "./components/pages/Drinks";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Rauter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";


function App(){

    return(
        <Rauter>
        <div >
        <Heading />
        <Navigation />
       
        <Switch>
            <Route exact path="/" > <HomeScreen /> </Route>
            <Route path="/products/Honey"> <Honey /></Route>
            <Route path="/products/HoneyProducts"> <HoneyProducts /></Route>
            <Route path="/products/Drinks"> <Drinks /> </Route>
            <Route exact path="/products" ><Products /> </Route>
            <Route path="/aboutUs" > <AboutUs /> </Route>
            <Route path="/contact" ><Contact /> </Route>

        </Switch>
              <Footer />  
        
        
        
        </div>
        </Rauter>
    )
}


export default App;