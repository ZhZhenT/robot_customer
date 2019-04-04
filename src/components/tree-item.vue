<template>
    <ul class="tree-wrap" style="width: 200px;position: relative;left: 20px">
        <li  v-for="(item,index) in tree" :key="index">
            <div @click="bindClickTreeItem(item)" class="tree-item">
                <span>{{item.name}}</span>
                <Button type='primary' icon='ios-add' size="small"></Button>
            </div>
            <div v-if="item.children">
                <tree-item :tree="item.children"></tree-item>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'tree-item',
  props: {
    tree: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    bindClickTreeItem (item) {
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
.tree-wrap{
    font-size: 16px;
    .tree-item{
        padding: 14px 24px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
