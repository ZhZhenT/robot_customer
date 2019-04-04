<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      url: this.$store.state.baseUrl
    }
  },
  mounted () {

  },
  components: {

  }
}
</script>
