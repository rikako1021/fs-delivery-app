<template>
  <div class="signup">
    <h2>ここはログイン後のユーザトップ画面</h2>
    <h1>Hello {{ name }}!!</h1>
    <h1>{{ msg }}</h1>
    <button @click="toMyPage">マイページへ</button>
    <button @click="toItemsSearch">商品検索</button>
    <button @click="toOrderHist">注文履歴</button>
      <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
export default {
  name: 'userTop',
  data () {
    return {
      msg: 'Welcome to サービス名',
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
</style>
