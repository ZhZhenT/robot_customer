<template>
    <div>
        <div class="navicon-con">
            <Button @click="toggleMenuShrink" type="text" :class="['button-init', { 'button-sk': menuShrink }]" >
                <Icon style="margin-right:0;line-height: 1;" type="md-menu" size="30"></Icon>
            </Button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'switchShrink',
  computed: {
    ...mapState([
      'menuShrink'
    ])
  },
  methods: {
    ...mapMutations([
      'toggleMenuShrinkMutations',
      'toggleRightMenuShrinkMutations'
    ]),
    toggleMenuShrink () {
      this.toggleMenuShrinkMutations()
      this.toggleRightMenuShrinkMutations()
    }
  }
}
</script>

<style lang="less" scoped>
.ivu-btn:focus{
    box-shadow: none;
}
.button-init{
    border: none;padding: 5px 10px;transition:.2s;
    transform: rotateZ(0deg)
}
.button-sk{
    transform: rotateZ(90deg)
}
</style>
