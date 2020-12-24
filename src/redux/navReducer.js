const SWITCH_TO_USD = 'SWITCH_TO_USD'


let initialState = {

}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_TO_USD: {
             let stateCopy = {...state}
             stateCopy.currency = 'USD'
        }
        default: return state
    }

}

export default navReducer