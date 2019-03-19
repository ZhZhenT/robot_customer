import Cookies from 'js-cookie'
import axios from 'axios'
import config from '../config'
import './interface'

axios.defaults.baseURL = config.baseUrl
axios.defaults.headers.common['Authorization'] = Cookies.get('token')
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.timeout = 30000

function init (vm) {
    interceptorReq(vm)
    interceptorRes(vm)
}

function interceptorReq () {
    axios.interceptors.request.use(
        config => {
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )
}
function interceptorRes () {
    axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
            return Promise.reject(error)
        }
    )
}

export default {
    init
}
