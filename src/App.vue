<template>
  <div id="app">
    <router-link to="/topTop"><img src="./assets/logo.png"></router-link>
    </router-link><router-view/>

  </div>
</template>

<script>
import Signin from './components/user/signin.vue'
export default {
  name: 'App',
  components: {
    Signin
  }
}
</script>

<style>
.user {
  background-color: rgba(18, 95, 63, 0.966);
  color: aliceblue;
  border-radius: 40px;
  padding: 30px;
  padding-top: 50px;
  margin: 25px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 0px gray;
}
.user .title {
  color: aliceblue;
  font-size: 160%;
}
.user h3{
  font-size: 120%;
}
.shop {
  border-radius: 40px;
  padding: 50px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
}
.shop .title {
  padding: 25px;
  color: rgb(0, 0, 0);
  font-size: 160%;
}
#app a {
 color: black;
 text-decoration: none;
}
.user a {
  color: aliceblue;
}
img {
  width: 30%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  font-family: "Hiragino Maru Gothic ProN W4";
}
</style>