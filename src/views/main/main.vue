<template>
    <div class="main">
        <menuWrap></menuWrap>
        <mainHeader></mainHeader>
        <mainContent>
            <router-view />
        </mainContent>
    </div>
</template>

<script>
    import mainHeader from './commonent/main-header'
    import menuWrap from './commonent/menu-wrap'
    import mainContent from './commonent/mainContent'
    export default {
        name: 'Main',
        components: {
            mainHeader,
            menuWrap,
            mainContent
        }
    }
</script>


