<template>
    <div class="main" :class="{ 'main-sk': menuShrink , 'rightMenuShrink-sk' : RightMenuShrink}">
        <menuWrap></menuWrap>
        <mainHeader></mainHeader>
        <mainContent>
            <rightMenu></rightMenu>
            <div class="content-wrap">
                <router-view />
                <tree style="display: none" @test="test"></tree>
            </div>
        </mainContent>

    </div>
</template>

<script>
import mainHeader from './commonent/main-header/main-header'
import menuWrap from './commonent/left-menu/left-menu'
import mainContent from './commonent/mainContent'
import rightMenu from './commonent/right-menu/right-menu'
import tree from '../../components/tree'
import { mapState } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {

    }
  },
  methods: {
    test () {
      console.log(1)
    }
  },
  computed: {
    ...mapState(['menuShrink', 'RightMenuShrink'])
  },
  components: {
    mainHeader,
    menuWrap,
    mainContent,
    tree,
    rightMenu
  },
  mounted () {

  }
}
</script>

<style lang="less">
    .rightMenuShrink-sk{
        .content-wrap{
            left: 0;
        }
    }
    .content-wrap{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        background: #f0f2f5;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        transition: left 0.5s ease 0s;
        left: 200px;
    }
</style>
