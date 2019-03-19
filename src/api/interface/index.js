import axios from 'axios'
import Vue from 'vue'

const api = {
    get : (params) => {
        return 'axios'
    }
}

api.install = function(Vue){
    Vue.prototype.$api = this
}

Vue.use(api)
