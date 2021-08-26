<template>
  <div class="hello">
    <img src="../assets/imgs/welcome-sign-2284312_1280.jpg" alt="サンプル" width="100%" height="400">
    <h1>Welcome to new Food Share Service!!</h1>
    <h2><button @click="signInShops">Shops</button></h2>
    <h2><button @click="signInUsers">Users</button></h2>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'FirstVisit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: firebase.auth().currentUser.email
    }
  },
  methods: {
    signInShops: function () {
      // firebase.auth().signOut().then(() => {
      //   // this.$router.push('/signin')
      //   this.$router.push('/signin_users')
      // })
      this.$router.push('/signin_shops')
    },
    signInUsers: function () {
      // firebase.auth().signOut().then(() => {
      //   // this.$router.push('/signin')
      //   this.$router.push('/signin_users')
      // })
      this.$router.push('/signin_users')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  position: relative;
  }

.hello p {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  /*文字の装飾は省略*/
  }

.hello img {
  width: 100%;
  }
</style>
