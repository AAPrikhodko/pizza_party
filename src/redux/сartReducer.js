const ADD_TO_CART = 'ADD_TO_CART'
const INCR_QTY = 'INCR_QTY'
const DECR_QTY = 'DECR_QTY'
const SWITCH_CURR = 'SWITCH_CURR'
const EUR_TO_USD = 1.23
const USD_TO_EUR = 1 / 1.23

let initialState = {
    cart: [],
    subTotal: 0,
    deliveryCost:0,
    total:0
}

const cartReducer = (state = initialState, action) => {

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


    switch (action.type) {
        case ADD_TO_CART: {
            let stateCopy = {...state}
            let tempItem = {...action.pizzaItem}
            stateCopy.cart = [...state.cart]

            if (state.cart.length === 0) {
                tempItem.orderedQty = +1
                stateCopy.cart.push(tempItem)
            } else {
                let findDouble = state.cart.findIndex(i => i.id === action.pizzaItem.id)
                if (findDouble !== -1) {
                    stateCopy.cart[findDouble].orderedQty++
                } else {
                    tempItem.orderedQty = +1
                    stateCopy.cart.push(tempItem)
                }
            }
            return stateCopy
        }

        case INCR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            stateCopy.cart[action.ind].orderedQty++
            return stateCopy

        }

        case DECR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            if (state.cart[action.ind].orderedQty === 1) {
                stateCopy.cart.splice(action.ind, 1)
            } else stateCopy.cart[action.ind].orderedQty--
            return stateCopy
        }
        case SWITCH_CURR: {
            let stateCopy = {...state}
            if (state.currancy === 'EUR' && action.currency === 'USD') {
                stateCopy.cart.map(e => (e.cost = fixUSD(e.cost))
                )

            }
            if (state.currancy === 'USD' && action.currency === 'EUR') {
                stateCopy.cart.map(e => (e.cost = fixEUR(e.cost))
                )

            }
            return stateCopy
        }
        default:
            return state
    }

}

export const addToCart = (pizzaItem) => ({type: ADD_TO_CART, pizzaItem})
export const increaseQty = (ind) => ({type: INCR_QTY, ind})
export const decreaseQty = (ind) => ({type: DECR_QTY, ind})
export const switchCurrencyTo = (currency) => ({type: SWITCH_CURR, currency})


export default cartReducer