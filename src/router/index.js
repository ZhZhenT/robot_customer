import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import iView from 'iview'

Vue.use(VueRouter)

const RouterConfig = {
    routes: routes
}

export default new VueRouter(RouterConfig)
