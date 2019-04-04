<template>
<div class="right-menu-wrap">
    <div class="menWrapChild ">
        <div class="title">
            菜单1
        </div>
        <sidebarMenu type="right" :menuList="menuList"></sidebarMenu>
    </div>
    <div @click="toggleRightMenuShrinkMutations" class="menWrap-btn"></div>
</div>
</template>

<script>
import sidebarMenu from '../menu/sidebarMenu'
// import sidebarMenuShrink from './sidebarMenuShrink'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'right-menu',
  data () {
    return {
      menuList: [
        { meta: { title: '餐单1' } },
        { meta: { title: '餐单2' }, children: [{ meta: { title: '餐单2-1' } }] }
      ]
    }
  },
  components: {
    sidebarMenu
  },
  computed: {
    ...mapState(['RightMenuShrink'])
  },
  methods: {
    ...mapMutations([
      'toggleRightMenuShrinkMutations'
    ])
  }
}
</script>

<style lang="less" >
.rightMenuShrink-sk{
    .right-menu-wrap{
        left: -200px;
    }
}
.right-menu-wrap{
    position: absolute;
    background: #ffffff;
    left: 0px;
    top: 0px;
    bottom: 0;
    width: 200px;
    z-index: 3;
    -webkit-transition: .5s;
    transition: .5s;
    .menWrapChild{
        overflow: auto;
        height: 100%;
        width: 200px;
    }
    .title{
        width: 200px;
        font-size: 24px;
        padding: 14px 24px;
    }

}
.menWrap-btn{
    position: absolute;
    right: -20px;
    top: 50%;
    height: 60px;
    width: 20px;
    background: #ed3f14;
    transform: translateY(-50%);
}

</style>
