import React from "react";
import logo from './../img/logo.jpg'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {switchCurrencyTo} from "../redux/homeReducer";
import {logOutClicked} from "../redux/authReducer";
import {Redirect} from "react-router-dom";


const Navbar = ({cartQty, loggedUserIndex, users, switchCurrencyTo, logOutClicked}) => {

    const handleChange = (event) => {
        switchCurrencyTo(event.target.value)
    }

    return (
        <div className="navbar_wrapper">
            <div className="navbar_container">
                <Link to="/"> <div className="logo"><img src={logo} alt="Picture not found"/></div> </Link>
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
                        {loggedUserIndex === null
                            ? <>
                                <Link to="/signin">
                                    <button className='button_login'>Login</button>
                                </Link>
                            </>
                            : <>
                                <select onChange={() => logOutClicked()} className='button_login' name={'log'}>
                                    <option selected disabled={true}>{users[loggedUserIndex].name}</option>
                                    <option >Logout</option>
                                </select>
                                <Redirect to={"/"}/>
                            </>
                        }


                        {/*
                        <Link to="/signin">
                        <button className='button_login'>
                            {loggedUserIndex === null
                                ? 'Login'
                                : < select className='button_login'>
                                    <option disabled={true}>{users[loggedUserIndex].name}</option>
                                    <option onClick={logOutClicked}>Logout</option>
                                </select>
                            }
                            {loggedUserIndex !== null && (<Redirect to={"/"}/>)}
                                </button>
                                </Link>
*/}
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
        }, 0),
        loggedUserIndex: state.auth.loggedUserIndex,
        users: state.auth.users
    }
}

export default connect(mapStateToProps, {logOutClicked,switchCurrencyTo})(Navbar)