import axios from "axios"

const baseUrl = "http://localhost:4000"

function postLogin(data) {
    return axios.post(`${baseUrl}/signin`, data)
}

function postCategory(data) {
    return axios.post(`${baseUrl}/categories`, data)
}

function getCategories(config) {
    return axios.get(`${baseUrl}/categories`, config)
}

export {postLogin, postCategory, getCategories}