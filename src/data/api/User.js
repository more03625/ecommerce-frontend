import axios from "axios"
import { Host, Endpoints, getUserInfo } from "../../helpers/comman_helpers";

export const userApi = (data = null, type) => {
    let url = Host + Endpoints.users

    let headers = {
        headers: {
            token: `Bearer ${getUserInfo().access_token}`
        }
    }
    return  type === 'get' ? (url = url + "/get", axios.get(url, data, headers)) :
            type === 'post' ? (axios.post(url, data, headers)) :
            type === 'put' ? (axios.post(url, data, headers)) : ''
}