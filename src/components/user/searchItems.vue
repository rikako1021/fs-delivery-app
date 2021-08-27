// 商品一覧・検索ページ

<template>
    <div id="app">
        <center>
          <br/>
        <h1>商品一覧</h1></center>
  <br/>
        <input class = "input" type="text" placeholder="キーワード" v-model="keyword">
        <button class='searchbutton' @click="filteredItems" type="button">検索</button>
        <br/>
        <br/>
        <body>
          <div v-for="(item, index) in filteredItems" :key="index">
            <div>

              <p v-if="itemsArray"> <img v-bind:src = "item.image"/></p>
              <div class='name' v-if="itemsArray">{{ item.name }}<br>
              値段：￥{{ item.price }}
              　商品数：{{ item.stocks }}個<br>
              フードロス：{{ item.weight }}g<br>
              
              <button class='button' @click="stackItem(item)" type="button">カートに追加</button>
            </div>
            </div>
          </div>

        </body>
        <button class='HomeBottom' @click="returnTop" type="button">ホームに戻る</button>
        <button class='HomeBottom' @click="goCart">カートを見る</button>
        <br>
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
      this.$router.push('/user/confirmOrder')
    },
    stackItem: function (item) {
      this.cartItems.push(
        {
          name: item.name,
          image: item.image,
          itemid: item.itemid,
          price: item.price,
          shopid: item.shopid,
          stocks: item.stocks,
          type: item.type,
          weight: item.weight
        }
      )
      sessionStorage.setItem('obj', JSON.stringify(
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
    font-family: "Hiragino Maru Gothic ProN W4";
}

.input{
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 50%;
  border: 0;
  box-sizing: border-box;
  font-size: 120%;
}

.button{
  font-family: "Hiragino Maru Gothic ProN W4";
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 30%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 16px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-bottom: 20px;
}
.searchbutton{
  text-transform: uppercase;
  outline: 0;
  background: #285e2a;
  width: 9%;
  border: 0;
  padding: 9px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 120%;
  font-family: "Hiragino Maru Gothic ProN W4";
  border-radius: 10px;
}
.HomeBottom{
border-radius: 40px;
  padding: 50px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10%;
  margin-bottom: 10%;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
  font-size: 140%;
  font-family: "Hiragino Maru Gothic ProN W4";
}

.name{
    font-size: 20px;
    font-weight: bold;
    font-family: "Hiragino Maru Gothic ProN W4";
    text-align: center;
    background: $headerbg;
    margin-bottom: 30px;
}
#app {
  font-family: "Hiragino Maru Gothic ProN W4";
}
</style>
