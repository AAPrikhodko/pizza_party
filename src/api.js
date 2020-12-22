import * as axios from "axios";

const instance = axios.create({

    baseURL: 'http://localhost:3004/',
    withCredentials: true

})

export const pizzasAPI = {
    getPizzas() {
        return instance.get(`/pizzas`)
            .then(response => response.data)
    }
}

export const authAPI = {
    login(email, password) {
        return instance.get(`/users`)
            .then(response => response.data)
    }
}