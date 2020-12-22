import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import homeReducer from './homeReducer'
import navReducer from './navReducer'
import cartReducer from "./сartReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    homePage: homeReducer,
    navBar: navReducer,
    cartPage: cartReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;


export default store;