import React from "react";
import logo from './../img/logo.jpg'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {switchCurrencyTo} from "../redux/homeReducer";


const Navbar = ({cartQty, switchCurrencyTo}) => {

    const handleChange = (event) => {
        switchCurrencyTo(event.target.value)
    }

    return (
        <div className="navbar_wrapper">
            <div className="navbar_container">
                <div className="logo"><img src={logo} alt="Picture not found"/></div>
                <div className="tagline">Perfect place for perfect taste</div>
                <div className="menu">
                    <span className='menuItem'>
                        <select onChange={handleChange} className='button_currency'>
                            <option selected value='EUR'>EUR</option>
                            <option value='USD'>USD</option>
                        </select>
                    </span>
                    < span className='menuItem'>
                        <Link to="/cart">
                        <button className='button_cart'>Cart <span>{cartQty === 0 ? '' : cartQty}</span></button>
                        </Link>
                </span>
                    <span className='menuItem'>
                        <Link to="/signin">
                        <button className='button_login'>Login</button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        cartQty: state.cartPage.cart.reduce((acc, i) => {
            acc += i.orderedQty
            return acc
        }, 0)
    }
}

export default connect(mapStateToProps, {switchCurrencyTo})(Navbar)