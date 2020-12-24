import React from "react";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SucsessOrder from "./components/sucsessOrder";
import SuccessAccount from "./components/sucsessAccount";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route exact path='/' render = {()=> <Home/>} />
                <Route exact path='/cart' render = {()=> <Cart />} />
                <Route exact path='/checkout' render = {()=> <Checkout />} />
                <Route exact path='/signin' render = {()=> <Signin />} />
                <Route exact path='/signup' render = {()=> <Signup />} />
                <Route exact path='/sucsessOrder' render = {()=> <SucsessOrder />} />
                <Route exact path='/successAccount' render = {()=> <SuccessAccount />} />
            </BrowserRouter>
        </div>
    )
}

export default App;
