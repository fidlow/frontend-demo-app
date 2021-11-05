<template>
  <Main />
</template>

<script>
import Main from './components/Main.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
