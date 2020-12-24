/*import {authAPI} from "../api";*/
import {cartToZero} from './../redux/сartReducer'

const LOGEDIN = 'LOGEDIN'
const LOGEDOUT = 'LOGEDOUT'
const ADDUSER = 'ADDUSER'
const ADDORDERTOUSER = 'ADDORDERTOUSER'


let initialState = {
    users: [
        {
            "id": 0,
            "name": "User1",
            "email": "test1@test.com",
            "password": "qwerty",
            "city": "Moscow",
            "orders": []
        },
        {
            "id": 1,
            "name": "User2",
            "email": "test2@test.com",
            "password": "qwerty",
            "city": "S.Petersburg",
            "orders": []
        },
        {
            "id": 2,
            "name": "User3",
            "email": "test3@test.com",
            "password": "qwerty",
            "city": "München",
            "orders": []
        }
    ],
    loggedUserIndex: null,
    accountBtnPressed:false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGEDIN: {
            let stateCopy = {...state}
            stateCopy.loggedUserIndex = action.index
            stateCopy.accountBtnPressed = false
            return stateCopy
        }
        case LOGEDOUT: {
            let stateCopy = {...state}
            stateCopy.loggedUserIndex = null
            return stateCopy
        }
        case ADDUSER: {
            let stateCopy = {...state}
            stateCopy.users = [...state.users, action.user]
            stateCopy.accountBtnPressed = true
            return stateCopy
        }
        case ADDORDERTOUSER: {
            let stateCopy = {...state}
            stateCopy.users = [...state.users]
            !action.userind && stateCopy.users[action.userind].orders.push(action.order)
            return stateCopy

        }

        default:
            return state
    }

}

export const loggedIn = (index) => ({type: LOGEDIN, index})
export const logOutClicked = () => ({type: LOGEDOUT})
export const addUser = (user) => ({type: ADDUSER, user})
export const addOrderToUser = (userind, order) => ({type: ADDORDERTOUSER, userind, order})



export const login = (email, password) => (dispatch) => {
    let ind = window.__store__.getState().auth.users.findIndex(user => (user.email === email && user.password === password))
    if (ind !== undefined) dispatch(loggedIn(ind))

}

export const createUser = (name, email, password) => (dispatch) => {
    let newUser = {
        id: window.__store__.getState().auth.users.length,
        name: name,
        email: email,
        password: password,
        orders: []
    }
    dispatch(addUser(newUser))
}

export const book = (values) => (dispatch) => {
    let indUser = window.__store__.getState().auth.loggedUserIndex
    if (indUser !== null) {

        let logUserOrderedQty = window.__store__.getState().cartPage.cart.reduce((acc, i) => {
            acc += i.orderedQty
            return acc
        }, 0)
        let logUserAddress = values.building +', ' + values.street + 'str. '
        let logUserPrice = window.__store__.getState().cartPage.deliveryCost + window.__store__.getState().cartPage.subTotal + 'EUR'
        let newOrder = {
            adress: logUserAddress,
            orderedQty: logUserOrderedQty,
            price: logUserPrice
        }
        dispatch(addOrderToUser(indUser, newOrder))
        dispatch(cartToZero())
    }
    else dispatch(cartToZero())
}

export default authReducer