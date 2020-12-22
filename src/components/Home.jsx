import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {addToCart} from "../redux/сartReducer";
import {getPizzas} from "../redux/homeReducer";


const Home = (props) => {

    let [pizzas, setPizzas] = useState(props.pizzas)
    useEffect(() => setPizzas(props.pizzas),[props.pizzas])
    console.log(pizzas)

    return (
        <div className='pizzas'>

            {pizzas.map(el =>
                (
                    <div className='pizzaItems'>
                        <img src={el.image}/>
                        <div>Name: {el.name}</div>
                        <div>{el.desc}</div>
                        <div>Cost: {el.cost} {props.currancy}</div>
                        <button className='button_ToCart' onClick={()=>{props.addToCart(el)}}>Add to Cart</button>
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

export default connect(MapStateToProps, {addToCart, getPizzas})(Home)