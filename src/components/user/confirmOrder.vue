// 注文確認ページ

<template>
    <div id="app">
        <center>
        <h1>注文確認</h1></center>
        <button @click="returnTop" type="button">ホーム</button><br>
        <button @click="goBack" type="button">買い物を続ける</button><br>
        <body>
          <div v-for="item in cartItems" :key="item.itemID">
            <div>
              <div class='name' v-if="cartItems">商品名：{{ item.name }}</div>
              <p v-if="cartItems"> <img v-bind:src = "item.image"/></p>
              <div class='price'>値段：{{ item.price }}</div>
              <div class='others'>出品数：{{ item.stock }}<br/>
              ジャンル：{{ item.type }}<br>
              フードロス[g]：{{ item.weight }}<br></div>
              </div>
            </div>
        </body>
        <div>合計金額: {{ cost }}</div>
        <button @click="goFinish" type="button">注文確定</button>
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
