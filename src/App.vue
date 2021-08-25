
    
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      /*ここから新規追加*/
      <router-link to="/user/signup">Sign up</router-link> |
      <router-link to="/user/signin">Sign in</router-link> |
      <router-link to="/user/signout">Sign out</router-link> |
      <router-link to="/user/userTop">Mypage</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
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
