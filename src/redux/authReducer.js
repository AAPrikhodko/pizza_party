import {authAPI} from "../api";

const LOGEDIN = 'LOGEDIN'

let initialState = {
    loggedUserIndex: 0,
    logedUser: []
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGEDIN: {
            let stateCopy = {...state}
            stateCopy.loggedUserIndex = action.index
            stateCopy.logedUser = action.user
            return stateCopy
        }
        default: return state
    }

}

export const loggedIn = (index, user) => ({type: LOGEDIN, index, user})

export const login = (email, password) => (dispatch) => {
    authAPI.login(email, password)
        .then(response =>{

            console.log("from login", email, password)
            let ind = response.findIndex(user => (user.email===email && user.password === password))
            let user = response[ind]
            if(ind !==undefined) dispatch(loggedIn(ind, user))
        })
}

export default authReducer