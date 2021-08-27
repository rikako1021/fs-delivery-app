<template>
<div id="userTop">
  <div class="signup">
    <h1>こんにちは  rikako240@gmail.com <!--{{ name }}-->さん</h1>
    <br/>
    <h3>お腹が空いたら料理を注文して、フードロス削減に貢献しませんか？<!--{{ msg }}--></h3>
      <div class="toItemSearch">
      <button @click="toItemSearch">
        <img src="../../assets/icon1.png"><br/>
          <h2>商品検索</h2>
      </button>
      </div>
    <div class="other">
      <div class="toMyPage">
      <button @click="toMyPage">
        <img src="../../assets/icon2.png"><br/>
        マイページ
      </button>
      </div>

      <div class="toOrderHist">
      <button @click="toOrderHist">
        <img src="../../assets/icon3.png"><br/>
        注文履歴
      </button>
      </div>
    </div>

      <div class="other">
        <div class="signout">
        <button @click="signOut">
          ログアウト
        </button>
        </div>

        <div class="none">
          救ったフードロスは600g
        </div>

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
      this.$router.push("/user/searchItems");
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
  margin: 0 0px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 0px;
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
  padding:40px;
  padding-top: 50px;
  margin: 25px;
  width: 90%;
  border-radius: 40px;
  box-shadow: 0px 0px 8px 0px gray;
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
  margin-top: 100px;
}
.signout {
  background-color: rgb(71, 168, 155);
  padding:20px;
  margin: 25px;
  width: 60%;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 0px gray;
}

.none {
  background-color: rgb(204, 204, 204);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 0px gray;
  border: none;
  font-family: "Hiragino Maru Gothic ProN W4";
  font-size: 160%;
  color: aliceblue;
  font-weight: bold;
}

.toMyPage {
  background-color: rgb(50, 114, 105);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 40px;
  padding-top: 8%;
  box-shadow: 0px 0px 8px 0px gray;
}
.toOrderHist {
  background-color: rgba(20, 167, 105, 0.966);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 40px;
  box-shadow: 0px 0px 8px 0px gray;
  padding-top: 8%;
}
.other {
  display: flex;
  margin: 1px;
  width: 95%;
  margin-bottom: 0.1%;
}
.signup {
  line-height: 150%;
}
h3 {
  font-size: 120%;
  line-height: 150%;
}
</style>
