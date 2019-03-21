<template>
    <div class="main">

        <div class="user-dropdown-menu-con clearfix" >
            <div class="logo-con">
                <span>客服机器人</span>
            </div>

            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">

            </Row>
            <!--<div style="float: right;height: 100%;color: #D0D0D0;display: flex;align-items: center;padding: 0 10px;font-size: 14px;font-style:italic">
                版本号  2.2.1 RC
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Main'
    }
</script>

<style lang="less"  scoped>
    .user-dropdown-menu-con{
        left: 0px;
        position: absolute;
        right: 0;
        height: 64px;
        background: #02223f;
        box-shadow: 0 2px 1px 1px hsla(0,0%,39%,.1);
        .logo-con{
            float: left;
            height: 100%;
            padding: 0;
            line-height: 64px;
            width: 200px;
            background: url("/images/logo.png") no-repeat;
            background-size: 62px 30px;
            background-position: 23px 15px;
            padding-left: 90px;
            padding-top: 4px;
            span{
                color: #ffffff;
                font-size: 18px;
                font-weight: bold;
            }

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
            a{
                color: #D0D0D0;
            }
            .ivu-dropdown{

            }
        }

    }
</style>
