import Vue from 'vue'
import App from './App.vue'
import store from './store'
import  './libs/filter.js'
import './api/interface'
import './assets/style/base.css'
import axiosPower from './api/index'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store,
  created () {
      axiosPower.init(this)
  }
}).$mount('#app')
