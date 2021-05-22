<template>
  <Header/>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {

  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import "./src/styles/globalsass.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b4a69;
  @media (max-width: $sm) {
    color: #c10cd1;
  }
}




</style>
