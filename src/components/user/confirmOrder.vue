// 注文確認ページ

<template>
    <div id="app">
        <center>
        <h1>注文確認</h1></center>
        <button @click="goBack" type="button">買い物を続ける</button><br>
        <body>
          <center>
          <h1 v-if="cartItems === null">カートには何も入っていません</h1></center>
          <div v-for="item in cartItems" :key="item.itemID">
            <div>
              <p v-if="cartItems"> <img v-bind:src = "item.image"/></p>
              <div class='price'>値段：{{ item.price }}</div>
              <div class='others'>
              ジャンル：{{ item.type }}<br>
              フードロス[g]：{{ item.weight }}<br></div>
              </div>
            </div>

          <HR></HR>

        <p class="cart-attribute__field">
          <label>配送時間を選択：</label>
          <select id="" name="attributes[配送時間指定]">
            <option value="08:00-09:00">08:00-09:00</option>
            <option value="09:00-10:00">09:00-10:00</option>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="11:00-12:00">11:00-12:00</option>
            <option value="12:00-13:00">12:00-13:00</option>
            <option value="13:00-14:00">13:00-14:00</option>
            <option value="14:00-15:00">14:00-15:00</option>
            <option value="15:00-16:00">15:00-16:00</option>
            <option value="16:00-17:00">16:00-17:00</option>
            <option value="17:00-18:00">17:00-18:00</option>
            <option value="18:00-19:00">18:00-19:00</option>
            <option value="19:00-20:00">19:00-20:00</option>
            <option value="20:00-21:00">20:00-21:00</option>
            <option value="21:00-22:00">21:00-22:00</option>
            <option value="22:00-23:00">22:00-23:00</option>
          </select>
        </p>

        </body>
        <center>
        <h1 v-if="cartItems">合計金額：¥{{ cost }}<br>
        <button v-if="cartItems" @click="goFinish" class="button">注文確定</button></h1></center>
      <div　class='backHomeBottom'>
        <router-link to="/user/userTop">ホームに戻る</router-link>
      </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
import firebase from 'firebase'

export default {
  name: 'confirmOrder',
  data() {
    return {
      cartItems: [],
      count: 0,
      cost: 0,
    }
  },
  created() {
    this.cartItems = JSON.parse(sessionStorage.getItem('obj'))
    console.log(this.cartItems)
    if (this.cartItems != null) {
      this.cartItems.forEach((item) => {
        console.log(item.price)
        this.cost += Number(item.price)
      })
    }
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/userTop')
    },
    goBack: function () {
      this.$router.push('/user/searchItems')
    },
    goFinish: function () {
      var dateControl = document.querySelector('input[type="datetime-local"]')
      console.log(dateControl.name)
      this.cartItems[0]['date'] = dateControl.name
      localStorage.setItem('obj', JSON.stringify(
        this.cartItems
      ))
      sessionStorage.clear()
      this.$router.push('/user/finishOrder')
    },
  },
}
</script>

<style scoped>
h1, h2 ,h3{
  line-height: 55px;
    font-size: 30px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    text-align: center;
    background: $headerbg;
    margin-top: 10px;
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
.sale {
  font-size:20px;
  margin: auto;
  padding: 100px;
  padding-left: 30%;
  padding-bottom: 0px;
}

.items{
  margin-bottom: 10%;
}


.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}


.backHomeBottom{
border-radius: 40px;
  padding: 50px;
  margin: 25px;
  margin-bottom: 5%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
}

.input{
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 50%;
  border: 0;
  margin: 10px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.button{
font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 20%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-bottom: 20px;
}

.name{
    font-size: 20px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    background: $headerbg;
    margin: 0px auto;
    margin-right: 30%;
    padding-top:40px;
    line-height: 200%;
}

hr{
  border-top: 3px dashed;
}

.float_l {
	float: left;
}


</style>
