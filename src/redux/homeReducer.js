import {pizzasAPI} from "../api";

const SWITCH_CURR = 'SWITCH_CURR'
const SET_PIZZAS = 'SET_PIZZAS'
const EUR_TO_USD = 1.23


/*
export const getPizzas = () => {
    return (dispatch) => {
        pizzasAPI.getPizzas().then(data => {
            window.__store__.dispatch(setPizzas(data.data))
        })
    }
}
*/

let initialState = {
    pizzas: [
        {
            "name": "Margarita",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "mozzarella cheese, ripe tomatoes and fresh basil leaves",
            "cost": 2,
            "id": 1,
            "orderedQty": 0
        },
        {
            "name": "4 cheese",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "best cheese from all over the world",
            "cost": 2.5,
            "id": 2,
            "orderedQty": 0
        },
        {
            "name": "Meat",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "salami, bacon, hunting sausages, bell pepper, onion",
            "cost": 5,
            "id": 3,
            "orderedQty": 0
        },
        {
            "name": "Pepperoni",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "a variety of salami gives pizza a spicy pungency and an unforgettable taste",
            "cost": 4.5,
            "id": 4,
            "orderedQty": 0
        },
        {
            "name": "Carbonara",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "With juicy bacon, mushrooms, red onion, creamy sauce and mozzarella cheese",
            "cost": 3,
            "id": 5,
            "orderedQty": 0
        },
        {
            "name": "Frutti di Mare",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "Description of pizza Frutti di Mare",
            "cost": 4.5,
            "id": 6,
            "orderedQty": 0
        },
        {
            "name": "Napoletana",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "the freshest pizza with seafood",
            "cost": 3.5,
            "id": 7,
            "orderedQty": 0
        },
        {
            "name": "Romana",
            "image": "https://zheldor.pizza-milana.ru/upload/3e837035-1a5b-409e-945f-b44d73a1adbf/size-1//bc96a932-efa1-4247-8dad-ab2900df9403.png",
            "desc": "the best classic pizza for all time",
            "cost": 3,
            "id": 8,
            "orderedQty": 0
        }
    ],
    currancy: 'EUR'
}

/*
export const getInitPizza = () => {
    const setInitPizza = (pizzas) => {
        initialState.pizzas = pizzas
    }
    let result = pizzasAPI.getPizzas()
    result.then(function (response) {
        return response;
    }).then(function (data) {
        console.log((data))
        setInitPizza(data);
    });
}
getInitPizza()
*/

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_CURR: {
            let stateCopy = {...state}
            stateCopy.currancy = action.currency
            return stateCopy
        }
        case SET_PIZZAS: {
            return {...state, pizzas: [...action.pizzas]}
        }
        default:
            return state
    }

}

export const switchCurrencyTo = (currency) => ({type: SWITCH_CURR, currency})
export const setPizzas = (pizzas) => ({type: SET_PIZZAS, pizzas})


export default homeReducer
