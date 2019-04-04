<template>
<div>
    <treeItem2  v-for="(item,index) in treedata" :key="index" :item="item"></treeItem2>
    <!--<Tree :data="data1"></Tree>-->
</div>
</template>

<script>
// import treeItem from './tree-item'
import treeItem2 from './tree-item2'

export default {
  name: 'tree',
  components: {
    treeItem2
  },
  data () {
    return {
      treedata: [
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
      ],
      data1: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    compileFlatState () {
      let keyCounter = 0
      let childrenKey = 'children'
      const flatTree = []
      function flattenChildren (node, parent) {
        node.nodeKey = keyCounter++

        flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey }
        if (typeof parent !== 'undefined') {
          flatTree[node.nodeKey].parent = parent.nodeKey
          flatTree[parent.nodeKey][childrenKey].push(node.nodeKey)
        }

        if (node[childrenKey]) {
          flatTree[node.nodeKey][childrenKey] = []
          node[childrenKey].forEach(child => flattenChildren(child, node))
        }
      }
      this.data1.forEach(rootNode => {
        flattenChildren(rootNode)
      })
      return flatTree
    },
    test () {
      console.log(1)
    }
  },

  computed: {

  },
  created () {
    this.isTree = true
  },
  mounted () {
    this.compileFlatState()
    // console.log(this.data1)
  }
}
</script>

<style scoped>

</style>
