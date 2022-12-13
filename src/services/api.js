import axios from "axios"

const baseUrl = "http://localhost:4000"

function postLogin(data) {
    return axios.post(`${baseUrl}/signin`, data)
}

function postCategory(data, config) {
    return axios.post(`${baseUrl}/categories`, data, config)
}

function getCategories(config) {
    console.log(config)
    return axios.get(`${baseUrl}/categories`, config)
}

function postProduct(data, config) {
    return axios.post(`${baseUrl}/products`, data, config)
}

function getProducts(data = "all", config) {
    return axios.get(`${baseUrl}/products?filter=${data}`, config)
}

function deleteProduct(data, config) {
    return axios.delete(`${baseUrl}/products/${data}`, config)
}

function deleteCategory(data, config) {
    return axios.delete(`${baseUrl}/categories/${data}`, config)
}

function postClient(data, config) {
    return axios.post(`${baseUrl}/customers`, data, config)
}

export {
    postLogin, 
    postCategory, 
    getCategories, 
    postProduct, 
    getProducts, 
    deleteProduct,
    deleteCategory,
    postClient
}