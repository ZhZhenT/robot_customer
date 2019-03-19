import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        baseUrl: config.baseUrl
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})

export default store
