import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config'

Vue.use(Vuex)

/* function findNode (tree, id) {
  // console.log(tree,id)
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      findNode(tree[i].children, id)
    }
    if (tree[i].id === id) {
      tree[i] = { name: 333 }
    }
  }
  return tree
} */

const store = new Vuex.Store({
  state: {
    baseUrl: config.baseUrl,
    username: 'xxx',
    menuShrink: false, // 左侧菜单展开
    menuList: [
      { meta: { title: '知识库' } },
      { meta: { title: '客服管理' } },
      { meta: { title: '系统设置' } }
    ],
    RightMenuShrink: false, // 右侧菜单展开
    tree: [
      {
        name: '1',
        id: 1,
        children: [
          { name: '1-1', id: 1001 },
          { name: '1-2', id: 1002 }
        ]
      },
      {
        name: '2',
        id: 2
      },
      {
        name: '3',
        id: 3
      }
    ]
  },
  mutations: {
    deleteTreeItem (state, id) {
      // console.log(state,id,'deleteTreeItem')
      // let node = findNode(state.tree, id)
      state.tree = []
    },
    toggleMenuShrinkMutations (state) {
      state.menuShrink = !state.menuShrink
    },
    toggleRightMenuShrinkMutations (state) {
      state.RightMenuShrink = !state.RightMenuShrink
    }
  },
  actions: {

  },
  getters: {

  }
})

export default store
