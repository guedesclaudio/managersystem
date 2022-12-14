import axios from "axios"

const baseUrl = "https://managersystem-backend.vercel.app/"

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

function getClients(config) {
    return axios.get(`${baseUrl}/customers`, config)
}

async function getStates(config) {
    return axios.get(`${baseUrl}/states`, config)
}

function deleteClient(data, config) {
    return axios.delete(`${baseUrl}/customers/${data}`, config)
}

function postOrder(data, config) {
    return axios.post(`${baseUrl}/orders`, data, config)
}

export {
    postLogin, 
    postCategory, 
    getCategories, 
    postProduct, 
    getProducts, 
    deleteProduct,
    deleteCategory,
    postClient,
    getClients,
    getStates,
    deleteClient,
    postOrder
}