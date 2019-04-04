<template>
    <div class="user-dropdown-menu-con clearfix" >
        <div :class="{ 'logo-wrap-sk': menuShrink }" class="logo-wrap">
            <div v-show="!menuShrink" class="logo">
                <span>客服机器人</span>
            </div>
        </div>
        <div class="switch-Shrink-wrap">
            <switchShrink></switchShrink>
        </div>

        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown" >
                <a href="javascript:void(0)">
                    <span class="main-user-name">{{ username }}</span>
                    <Icon type="ios-arrow-down" />
                </a>
                <DropdownMenu slot="list">
                    <!--<DropdownItem name="ownSpace">个人中心</DropdownItem>-->
                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Row>
        <div style="float: right;height: 100%;color: #D0D0D0;display: flex;align-items: center;padding: 0 10px;font-size: 14px;font-style:italic">
            版本号  0.0.8 RC
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import switchShrink from './switchShrink'
export default {
  name: 'main-header',
  data () {
    return {

    }
  },
  components: {
    switchShrink
  },
  computed: {
    ...mapState(['username', 'menuShrink'])
  },
  methods: {
    handleClickUserDropdown (name) {

    }
  },
  mounted () {

  }
}
</script>

<style lang="less"  scoped>

    .user-dropdown-menu-con{
        left: 0;
        position: absolute;
        right: 0;
        height: 64px;
        // background: #02223f;
        z-index: 10;
        box-shadow: 0 0px 1px 1px hsla(0,0%,39%,.1);
        .logo-wrap{
            float: left;
            height: 100%;
            width: 200px;
            background: #f35047;
            transition: .5s;
            .logo{
                height: 100%;
                padding: 0;
                width: 200px;
                line-height: 64px;
                background: url("/images/logo.png") no-repeat;
                background-size: 62px 30px;
                background-position: 23px 15px;
                padding-left: 90px;
                padding-top: 4px;
                transition: .5s;
            }
            span{
                color: #ffffff;
                font-size: 18px;
                font-weight: bold;
            }

        }
        .logo-wrap-sk{
            width: 60px;
            padding: 0;
        }
        .crumbs{
            float: left;
            height: 100%;
            padding-left: 20px;

            button{
                transition: .2s;
                background: #063562;
                border: 1px solid #063562;
                color: #D0D0D0;
                border-radius: 0px;
            }
            button:first-child{
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            button:last-child{
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
            button:hover{
                color: #ffffff;
                background: #2667d2;
                box-shadow: none;
                border: 1px solid #2667d2;
            }
            button.active{
                color: #ffffff;
                background: #2667d2;
                box-shadow: none;
                border: 1px solid #2667d2;
            }
        }
        .user-dropdown-innercon{
            float: right;
            right: 0;
            top: 0;
            bottom: 0;
            height: 100%;
            padding: 0 25px 0 15px;
            align-items: center;
            display: flex;
            font-size: 12px;
            a{
                color: #D0D0D0;
            }
            .ivu-dropdown{

            }
        }

    }
.switch-Shrink-wrap{
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-right:1px solid #f4f4f4;
}
</style>
