// 注文確認ページ

<template>
    <div id="app">
        <center>
        <h1>注文確認</h1></center>
        <body>
          <div v-for="item in cartItems" :key="item.itemID">
            <div>
              <p v-if="cartItems"> <img v-bind:src = "item.image"/></p>
                <div class='name' v-if="cartItems">
                  {{ item.name }}<br>
                  　値段：{{ item.price }}￥
                  　フードロス：{{ item.weight }}g<br>
                </div>
              <div　class='sum'>合計金額：{{ cost }}￥</div>
            </div>
          </div>
        </body>
        <button class = "button" @click="goFinish" type="button">注文確定</button><br>
        <button class='backHomeBottom' @click="returnTop" type="button">ホームに戻る</button>
        <button class='backHomeBottom' @click="goBack" type="button">買い物を続ける</button><br>
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
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('obj'))
    console.log(this.cartItems)
    this.cartItems.forEach((item) => {
      console.log(item.price)
      this.cost += Number(item.price)
    })
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/userTop')
    },
    goBack: function () {
      this.$router.push('/user/searchItems')
    },
    goFinish: function () {
      localStorage.clear()
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
}

.sum{
font-size: 20px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    background: $headerbg;
    margin: 1% 0%;
}

hr{
  border-top: 3px dashed;
}

.float_l {
	float: left;
}


</style>
