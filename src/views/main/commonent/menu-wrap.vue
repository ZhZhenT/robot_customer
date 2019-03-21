<template>
    <div class="menu-wrap">


        <switchShrink></switchShrink>
        <sidebarMenu></sidebarMenu>
        <sidebarMenuShrink></sidebarMenuShrink>

    </div>
</template>

<script>
    import sidebarMenu from './sidebarMenu'
    import sidebarMenuShrink from './sidebarMenuShrink'
    import switchShrink from './switchShrink'
    export default {
        name: 'menu-wrap',
        components: {
            sidebarMenu,
            sidebarMenuShrink,
            switchShrink
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
}
</style>
