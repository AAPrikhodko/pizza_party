import {pizzasAPI} from "../api";

const SWITCH_CURR = 'SWITCH_CURR'
const SET_PIZZAS = 'SET_PIZZAS'
const EUR_TO_USD = 1.23
const USD_TO_EUR = 1 / 1.23


export const getPizzas = () => {
    return (dispatch) => {
        pizzasAPI.getPizzas().then(data => {
            window.__store__.dispatch(setPizzas(data.data))
        })
    }
}

export const switchCurrencyTo = (currency) => ({type: SWITCH_CURR, currency})
export const setPizzas = (pizzas) => ({type: SET_PIZZAS, pizzas})


let initialState = {
    pizzas: [],
    currancy: 'EUR'
}

export const getInitPizza = () => {

    const setInitPizza = (pizzas) => {
        initialState.pizzas = pizzas

    }

    let result
    result = pizzasAPI.getPizzas()
    result.then(function (response) {
        return response;
    }).then(function (data) {
        console.log((data))
        setInitPizza(data);
    });

}

getInitPizza()


function fixUSD(fl) {
    let temp
    temp = fl * EUR_TO_USD
    temp = temp.toFixed(2)
    return temp
}

function fixEUR(fl) {
    let temp
    temp = fl * USD_TO_EUR
    temp = temp.toFixed(2)
    return temp
}


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_CURR: {
            let stateCopy = {...state}
            if (state.currancy === 'EUR' && action.currency === 'USD') {
                stateCopy.pizzas.map(e => (e.cost = fixUSD(e.cost))
                )
                stateCopy.currancy = action.currency
            }
            if (state.currancy === 'USD' && action.currency === 'EUR') {
                stateCopy.pizzas.map(e => (e.cost = fixEUR(e.cost))
                )
                stateCopy.currancy = action.currency
            }
            return stateCopy
        }
        case SET_PIZZAS: {
            return {...state, pizzas: [...action.pizzas]}
        }
        default:
            return state
    }

}

export default homeReducer