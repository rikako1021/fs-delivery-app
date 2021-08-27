<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="user">
      <h4 class="title">個人ユーザの方</h4>
      <!-- <router-link to="/user/signin">サインイン</router-link>  -->
      <Signin></Signin>
      <br/><br/>
      <h3>初めてご利用になる方は
      <router-link to="/user/signup">こちら</router-link></h3>
      
    </div>
      <!-- <router-link to="/user/signout">Sign out</router-link> | -->
      <!-- <router-link to="/user/userTop">Mypage</router-link>  -->
      <br/>

    <router-link to="/shop/shopEnter">
    <a href="/shop/shopEnter">
    <div class="shop">
      <h4 class="title">
        飲食店の方はこちら
      </h4>
    </div></a>
    </router-link><router-view/> 

      
      <!-- <router-link to="/shop/shopsignout">Sign out</router-link> | -->
      <!--<router-link to="/shop/shopTop">shoppage</router-link> -->
    
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