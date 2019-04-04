<template>
    <div class="menu-wrap left-menu-wrap" >

        <!-- <switchShrink></switchShrink>-->
        <sidebarMenu type="left" :menuList="menuList" v-show="!menuShrink"></sidebarMenu>
        <sidebarMenuShrink v-show="menuShrink"></sidebarMenuShrink>

    </div>
</template>

<script>
import sidebarMenu from '../menu/sidebarMenu'
import sidebarMenuShrink from '../menu/sidebarMenuShrink'
import { mapState } from 'vuex'
// import switchShrink from './switchShrink'
export default {
  name: 'menu-wrap',
  components: {
    sidebarMenu,
    sidebarMenuShrink
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['menuShrink', 'menuList'])
  }
}
</script>

<style lang="less" scoped>
    .menu-wrap{
        position: absolute;
        left: 0;
        top: 64px;
        bottom: 0;
        width:200px; overflow:auto;
        transition:.5s;
        background: #293542;
    }
    .main-sk .menu-wrap{
        width:60px;
    }

</style>
