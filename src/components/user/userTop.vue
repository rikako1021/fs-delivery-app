<template>
<div id="userTop">
  <div class="signup">
    <h1>こんにちは {{ name }}さん</h1>
    <h3>{{ msg }}</h3>
    <div class="toItemSearch">
    <button @click="toItemsSearch">
        商品検索
    </button>
    </div>
    <div class="other">
    <div class="toMyPage">
    <button @click="toMyPage">
      マイページ
    </button>
    </div>
    <div class="toOrderHist">
    <button @click="toOrderHist">
      注文履歴
    </button>
    </div>
    </div>
    <div class="signout">
    <button @click="signOut">
      Sign out
    </button>
    </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'userTop',

  data () {
    return {
      msg: 'お腹が空いたら料理を注文して、フードロス削減に貢献しませんか？',
      name: firebase.auth().currentUser.email
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('../signIn')
      })
    },
    toMyPage(){
      this.$router.push("/user/myPage");
      location.reload();
    },
    toItemSearch(){
      this.$router.push("/user/itemSearch");
      location.reload();
    },
    toOrderHist(){
      this.$router.push("/user/orderHist");
      location.reload();
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-size: 150%;
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
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
.toItemSearch {
  background-color: rgba(18, 95, 63, 0.966);
  padding:30px;
  margin: 25px;
  width: 90%;
  border-radius: 40px;
}
button {
  font-size: 120%;
  background-color: initial;
  border: none;
  font-family: "Hiragino Maru Gothic ProN W4";
  font-size: 160%;
  color: aliceblue;
  font-weight: bold;
}
#userTop{
  font-family: "Hiragino Maru Gothic ProN W4";
}

.signout {
  background-color: rgba(255, 255, 255, 0.966);
  padding:30px;
  margin: 25px;
  width: 90%;
  border-radius: 40px;
}
.toMyPage {
  background-color: rgba(18, 95, 63, 0.966);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 40px;
}
.toOrderHist {
  background-color: rgba(18, 95, 63, 0.966);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 40px;
}
.other {
  display: flex;
  margin: 0;
}
</style>
