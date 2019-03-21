<template>
    <div>
        <div v-for="(item,index) in menuList" :key="index">
            <div v-if="!item.children">
                <MenuItem :name="item.meta.title" :to="item" >
                    <!--<Icon :type="item.meta.icon" size="16"/>-->
                    <Icon v-if="item.meta.icon"  :custom="'i-icon ' + 'iconfont ' + item.meta.icon " size="16" />
                    <span>{{item.meta.title}}</span>
                </MenuItem>

            </div>
            <div v-else>
                <Submenu :name="item.meta.title">
                    <template slot="title">
                        <Icon v-if="item.meta.icon" :custom="'i-icon ' + 'iconfont ' + item.meta.icon " size="16" />
                        {{item.meta.title}}</template>
                    <menuList :menuList="item.children"></menuList>
                </Submenu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menuList',
        props: {
            menuList: Array
        }
    }
</script>

<style>

</style>
