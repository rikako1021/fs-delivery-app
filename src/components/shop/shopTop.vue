<template>
  <!-- <div class="signup">
    <h2>ここはログイン後の店舗トップ画面</h2>
      <button @click="toMyShop">店舗情報の確認</button>
      <button @click="toMyItems">商品の管理</button>
      <button @click="toMyOrders">注文の確認</button>
  </div> -->
  <div id="shopTop">
  <div class="signup">
    <h1>こんにちは  rikako240@gmail.com <!--{{ name }}-->さん</h1>
    <br/>
    <h3>あなたがしたいことを選んでください！<!--{{ msg }}--></h3>
    <div class="toMyItems">
    <button @click="toMyItems">
      <img src="../../assets/icon1.png"><br/>
        <h2>商品の管理</h2>
    </button>
    </div>
    <div class="other">
    <div class="toMyShop">
    <button @click="toMyShop">
      <img src="../../assets/icon2.png"><br/>
      店舗情報の確認
    </button>
    </div>
    <div class="toMyOrders">
    <button @click="toMyOrders">
      <img src="../../assets/icon3.png"><br/>
      注文の確認
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

<<<<<<< HEAD
      <button @click="toMyShop">店舗情報の確認</button>
      <button @click="toMyItems">商品の管理</button>
      <button @click="toMyOrders">注文の確認</button>

  </div> -->
  <div id="shopTop">
  <div class="signup">
    <h1>こんにちは  rikako240@gmail.com <!--{{ name }}-->さん</h1>
    <br/>
    <h3>あなたがしたいことを選んでください！<!--{{ msg }}--></h3>
    <div class="toMyItems">
    <button @click="toMyItems">
      <img src="../../assets/icon1.png"><br/>
        <h2>商品の管理</h2>
    </button>
    </div>
    <div class="other">
    <div class="toMyShop">
    <button @click="toMyShop">
      <img src="../../assets/icon2.png"><br/>
      店舗情報の確認
    </button>
    </div>
    <div class="toMyOrders">
    <button @click="toMyOrders">
      <img src="../../assets/icon3.png"><br/>
      注文の確認
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

=======
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopTop',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toMyShop(){
      this.$router.push("/shop/myShop");
      location.reload();
    },
    toMyItems(){
      this.$router.push("/shop/myItems");
      location.reload();
    },
    toMyOrders(){
      this.$router.push("/shop/myOrders");
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
<<<<<<< HEAD

=======
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
.toMyItems {
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
#shopTop{
  font-family: "Hiragino Maru Gothic ProN W4";
  margin-top: 100px;
}
<<<<<<< HEAD

=======
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
.signout {
  background-color: rgb(71, 168, 155);
  padding:20px;
  margin: 25px;
  width: 60%;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 0px gray;
}
.none {
  background-color: rgb(182, 182, 182);
  padding:20px;
  margin: 25px;
  width: 60%;
  border-radius: 30px;
  box-shadow: 0px 0px 8px 0px gray;
}
.toMyShop {
  background-color: rgb(50, 114, 105);
  padding:30px;
  margin: 25px;
  width: 60%;
  border-radius: 40px;
  padding-top: 8%;
  box-shadow: 0px 0px 8px 0px gray;
}
.toMyOrders {
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
