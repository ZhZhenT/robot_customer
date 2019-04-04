<template>
    <ul class="tree-wrap" style="width: 200px;position: relative;left: 20px">
        <li>
            <div @click="bindClickTreeItem(item)" class="tree-item">
                <span>{{item.name}}</span>
                <div>
                    <Button type='primary' icon='ios-add' size="small"></Button>
                    <Button type='primary' icon='ios-remove' size="small"></Button>
                </div>
            </div>
            <template v-if="item.children">
                <tree-item  v-for="(child,index) in item.children" :key="index" :item="child"></tree-item>
            </template>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'tree-item',
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      tree: null
    }
  },
  created () {
    const parent = this.$parent

    if (parent.isTree) {
      this.tree = parent
    } else {
      this.tree = parent.tree
    }
  },
  methods: {
    bindClickTreeItem (item) {
      /* const children = this.item.children || [];

                children.push({
                    name: 'append',
                    id: 11
                });

                this.$set(item, 'children', children); */
      this.tree.$emit('test', 1)
    },
    remove () {

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
