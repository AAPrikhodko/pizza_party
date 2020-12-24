const ADD_TO_CART = 'ADD_TO_CART'
const INCR_QTY = 'INCR_QTY'
const DECR_QTY = 'DECR_QTY'
const CART_TO_ZERO = 'CART_TO_ZERO'


let initialState = {
    cart: [],
    subTotal: 0,
    deliveryCost:11,
    proceedBtnPressed:false
}

const cartReducer = (state = initialState, action) => {
    
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
            stateCopy.subTotal += tempItem.cost
            stateCopy.proceedBtnPressed = false
            return stateCopy
        }

        case INCR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            stateCopy.cart[action.ind].orderedQty++
            stateCopy.subTotal += stateCopy.cart[action.ind].cost
            return stateCopy

        }

        case DECR_QTY: {
            let stateCopy = {...state}
            stateCopy.cart = [...state.cart]
            stateCopy.subTotal -= stateCopy.cart[action.ind].cost
            if (state.cart[action.ind].orderedQty === 1) {
                stateCopy.cart.splice(action.ind, 1)
            } else stateCopy.cart[action.ind].orderedQty--

            return stateCopy
        }

        case CART_TO_ZERO: {
            let stateCopy = {...state}
            stateCopy.cart = []
            stateCopy.subTotal = 0
            stateCopy.proceedBtnPressed = true
            return stateCopy
        }
        default:
            return state
    }

}

export const addToCart = (pizzaItem) => ({type: ADD_TO_CART, pizzaItem})
export const increaseQty = (ind) => ({type: INCR_QTY, ind})
export const decreaseQty = (ind) => ({type: DECR_QTY, ind})
/*export const switchCurrencyTo = (currency) => ({type: SWITCH_CURR, currency})*/
export const cartToZero = () => ({type: CART_TO_ZERO})


export default cartReducer