import axios from "axios"

function postLogin(data) {
    return axios.post(`${baseUrl}/signin`, {data})
}

export {postLogin}