import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {addToCart} from "../redux/сartReducer";
import {getPizzas} from "../redux/homeReducer";
import {valueInCurrency} from "./Cart"


const Home = ({pizzas, currancy, addToCart}) => {

/*    let [pizzas, setPizzas] = useState(props.pizzas)
    useEffect(() => setPizzas(props.pizzas),[props.pizzas])
    console.log(pizzas)*/



    return (
        <div className='pizzas'>

            {pizzas.map(el =>
                (
                    <div className='pizzaItems'>
                        <img src={el.image}/>
                        <div className = 'pizzaItem'>{el.name}</div>
                        <div className = 'pizzaItem'>{el.desc}</div>
                        <div className = 'pizzaItem'>{valueInCurrency(el.cost, currancy)} {currancy}</div>
                        <button className='button_ToCart' onClick={()=>{addToCart(el)}}>Add to Cart</button>
                    </div>))
            }
        </div>
    )
}

let MapStateToProps = (state) => {
    return {
        pizzas: state.homePage.pizzas,
        currancy: state.homePage.currancy
    }
}

export default connect(MapStateToProps, {addToCart})(Home)