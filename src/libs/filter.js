import Vue from 'vue'

const filter = {
  test: () => {
    return 'filter'
  }
}

Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))

export default filter
