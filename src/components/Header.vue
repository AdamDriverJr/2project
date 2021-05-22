<template>
  <div>
    <div id="nav">
      <div id="logo">
        <img src="../assets/logo.png" alt="logo" />
      </div>
      <div id="menu">
        <router-link to="/">About</router-link> |
        <router-link to="/info">Info</router-link> |
        <router-link to="/gallery">Gallery</router-link> |
        <router-link to="/scout">Become A Scout</router-link> |
        <router-link to="/leader">Leader Log In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/globalsass.scss";

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 30px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
    @media (max-width: $sm) {
    font-size: x-small;
  }
  @media (max-width: $xsm) {
    font-size: 8px;
  }
        
    }
  }

</style>