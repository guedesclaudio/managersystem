import axios from "axios"

const baseUrl = "http://localhost:4000"

function postLogin(data) {
    return axios.post(`${baseUrl}/signin`, data)
}

function postCategory(data, config) {
    return axios.post(`${baseUrl}/categories`, data, config)
}

function getCategories(config) {
    return axios.get(`${baseUrl}/categories`, config)
}

function postProduct(data, config) {
    console.log(data)
    return axios.post(`${baseUrl}/products`, data, config)
}

export {postLogin, postCategory, getCategories, postProduct}