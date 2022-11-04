import axios from "axios"

const baseUrl = "http://localhost:4000"

function postLogin(data) {
    console.log(data)
    return axios.post(`${baseUrl}/signin`, data)
}

export {postLogin}