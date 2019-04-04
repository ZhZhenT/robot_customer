import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import iView from 'iview'

Vue.use(VueRouter)

const RouterConfig = {
  routes: routes
}

const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
})

export default router
