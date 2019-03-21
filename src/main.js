import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import iview from  'iview'
import './libs/filter.js'
import './libs/utils.js'
import './assets/style/base.css'
import axiosPower from './api/index'


Vue.config.productionTip = false

Vue.use(iview)

new Vue({
  render: h => h(App),
  store,
  router,
  created () {
      axiosPower.init(this)
  }
}).$mount('#app')
