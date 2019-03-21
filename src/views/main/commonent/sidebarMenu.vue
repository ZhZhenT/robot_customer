<template>
<Menu width="auto"  @on-select="selectMenuItem" >
    <menuList :menu-list="menuList"></menuList>
</Menu>
</template>

<script>
    import menuList from './menuList'
    export default {
        name: 'sidebarMenu',
        data () {
            return {
                menuList: [
                    {meta: {title: '餐单1'}},
                    {meta: {title: '餐单2'},children: [{meta: {title: '餐单2-1'}}]}
                ]
            }
        },
        components: {
            menuList
        },
        methods: {
            // 左侧菜单 点击自己刷新
            selectMenuItem (name) {
                if (this.$store.state.crumbsStr === name) {
                    // this.$emit('reload')
                }
            }
        },
    }
</script>

<style scoped>

</style>
