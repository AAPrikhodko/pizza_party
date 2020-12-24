import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {decreaseQty, increaseQty} from "../redux/сartReducer";
import cat from './../img/cat.jpg'

const EUR_TO_USD = 1.23

export const valueInCurrency = (value, currancy) => {
    if (currancy === "USD") return (value *= EUR_TO_USD).toFixed(2)
    else return value
    return
}

const Cart = ({currancy, cart, increaseQty, decreaseQty, subTotal, deliveryCost}) => {

    return (
        <>
            <div className="cart_container">
                <div className='cart_header'>Cart</div>
                <div className="cart_items">
                    {
                        cart.map((i, ind) => (
                                <div className='cart_item'>
                                    <img className='cart_item_img' src={i.image} alt="Picture not found"/>
                                    <div className='cart_item_name'>{i.name}</div>
                                    <div className='cart_item_buttons'>
                                        <span><button className='cart_butt_pl' onClick={() => decreaseQty(ind)}> - </button> </span>
                                        <span> {i.orderedQty} </span>
                                        <span><button className='cart_butt_pl' onClick={() => increaseQty(ind)}> + </button> </span>
                                    </div>
                                    <div
                                        className='cart_item_cost'> {valueInCurrency((i.cost * i.orderedQty).toFixed(2), currancy)} {currancy}</div>
                                </div>
                            )
                        )
                    }
                </div>
                {cart.length === 0 ?
                    <div className='cart_header'>
                        <img src={cat} alt=""/>
                        <div>EMPTY :(((</div>
                        <div>No PIZZA ??</div>
                        <br/>
                    </div> :
                    <div className="cart_price">
                        <div className="cart_price_sub">SubTotal: {valueInCurrency(subTotal, currancy)}
                            <span> {currancy}</span></div>
                        <div className="cart_price_sub">Delivery: {valueInCurrency(deliveryCost, currancy)}
                            <span> {currancy}</span></div>
                        <div className="cart_price_sub">Total: {valueInCurrency(subTotal + deliveryCost, currancy)}
                            <span> {currancy}</span></div>
                    </div>
                }
                <Link to={'/'}>
                    <button className='cart_butt'>Choose more pizza!</button>
                </Link>
                <Link to={'/checkout'}>
                    <button className='cart_butt' disabled={cart.length === 0}>Checkout</button>
                </Link>
            </div>
        </>
    )
}

const MapStateToProps = (state) => {
    return {
        cart: state.cartPage.cart,
        currancy: state.homePage.currancy,
        subTotal: state.cartPage.subTotal,
        deliveryCost: state.cartPage.deliveryCost,
    }
}

export default connect(MapStateToProps, {increaseQty, decreaseQty})(Cart)