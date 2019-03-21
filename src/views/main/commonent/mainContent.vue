<template>
    <div class="mainContent">
        <div class="mainContent-scroll">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainContent'
    }
</script>

<style lang="less" scoped>
.mainContent{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: #f0f2f5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: left 0.3s;
    margin-top: 64px;
    transition: left 0.5s ease 0s;
    left: 200px;
    padding: 10px;
}
</style>
