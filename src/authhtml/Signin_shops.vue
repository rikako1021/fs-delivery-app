<template>
  <div class="signin">
    <img src="../assets/imgs/paris-4694708_1920.jpg" alt="サンプル" >
    <h2>Sign in (Shops)</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button>Signin</button>
    <p>You don't have an account?
      <router-link to="/signup_shops">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SigninShops',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
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
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
/*input {
/*  margin: 10px 0;
/*  padding: 10px;
/*}
*/

.signin input {/*aタグを画像の真ん中に*/
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  /*以下装飾*/
  margin:0;/*余計な隙間を除く*/
  font-size: 20px;/*文字サイズ*/
  border: solid white 2px; /*線で囲う*/
  padding: 7px;/*文字と線の間の余白*/
  color: white;/*文字色*/
  text-decoration: none;/*下線を表示させない*/
  }
.signin {
  position: relative;
  }

.signin h2 {
  position: absolute;
  color: white;
  background: black;/*背景色*/
  font-size: 6em;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  /*文字の装飾は省略*/
  }

.signin img {
  width: 100%;
  }
</style>
