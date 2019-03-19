<template>
  <div id="app">
    {{url | test}} <br>
    {{url}}
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
      this.$api.get()
    },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
