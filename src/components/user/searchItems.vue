// 商品一覧・検索ページ

<template>
    <div id="app">
        <center>
        <h1>商品一覧</h1></center>
        <button @click="returnTop" type="button">ホーム</button><br>
        <input type="text" placeholder="キーワード" v-model="keyword">
        <button @click="filteredItems" type="button">商品検索</button>
        <body>
          <div v-for="(item, index) in filteredItems" :key="index">
            <div>
              <div class='name' v-if="itemsArray">商品名：{{ item.name }}</div>
              <p v-if="itemsArray"> <img v-bind:src = "item.image"/></p>
              <div class='price'>値段：{{ item.price }}</div>
              <div class='others'>出品数：{{ item.stock }}<br/>
              ジャンル：{{ item.type }}<br>
              フードロス[g]：{{ item.weight }}<br>
              <button @click="stackItem(item)" type="button">+</button></div>
            </div>
          </div>
        </body>
        <button @click="goCart">カート</button>
    </div>
</template>

<script>
/* eslint-disable no-console */
import firebase from 'firebase'

export default {
  name: 'searchItems',
  data() {
    return {
      keyword: '',
      itemsArray: [],
      cartItems: [],
      count: 0,
    }
  },
  created() {
    /* 全てのドキュメントを配列に代入 */
    const that = this
    const items = firebase
      .firestore()
      .collection("items")
      // .where('itemID','==','i00001')
    items.get().then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        const item = doc.data()
        that.itemsArray = [
          ...that.itemsArray,
          {
            name: item.description,
            image: item.image,
            itemID: item.itemID,
            price: item.price,
            shopID: item.shopID,
            stocks: item.stocks,
            type: item.type,
            weight: item.weight,
          },
        ]
      })
    })
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/userTop')
    },
    goCart: function () {
      this.$router.push('/user/searchItems/confirmOrder')
    },
    stackItem: function (item) {
      this.cartItems.push(
        {
          name: item.description,
          image: item.image,
          itemid: item.itemid,
          price: item.price,
          shopid: item.shopid,
          stocks: item.stocks,
          type: item.type,
          weight: item.weight
        }
      )
      localStorage.setItem('obj', JSON.stringify(
        this.cartItems
      ))
      console.log(localStorage)
    },
    increment: function () {
      this.count++
      console.log(this.count)
      // document.getElementById("press-button").innerHTML = this.cnt
    },
    decrement: function () {
      this.count--
      console.log(this.count)
      // document.getElementById("press-button").innerHTML = this.cnt
    }
  },
  computed: {
    filteredItems: function() {
      var items = []
      console.log(this.itemsArray)
      for (var i in this.itemsArray) {
        var item = this.itemsArray[i]
        if (item.name.indexOf(this.keyword) !== -1) {
          items.push(item)
        }
        else if (this.keyword == "") {
          items.push(item)
        }
      }
      return items
    }
  }
}
</script>
