import Vue from 'vue'

const utils = {
  test: () => {
    return 'utils'
  }
}

utils.install = function (Vue) {
  Vue.prototype.$utils = this
}

Vue.use(utils)

export default utils
