<template>
<Menu  width="auto"  @on-select="selectMenuItem" >
    <menuList :type="type" :menu-list="menuList"></menuList>
</Menu>
</template>

<script>
import menuList from './menuList'
export default {
  name: 'sidebarMenu',
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  components: {
    menuList
  },
  methods: {
    // 左侧菜单 点击自己刷新
    selectMenuItem (name) {
      console.log(name)
      if (this.$store.state.crumbsStr === name) {
        // this.$emit('reload')
      }
    }
  }
}
</script>

<style  lang="less" >

</style>
