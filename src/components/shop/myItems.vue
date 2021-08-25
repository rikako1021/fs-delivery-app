<!--商品一覧画面-->
<template>
  <div>
    <center>
      <h1>出品一覧</h1></center>
    <body>
      <div v-for="item in shopItemsArray">
        <div>
          <div class='name'>商品名：{{ item.name }}</div>
          <div class='image'>{{ item.img }}</div>
          <div class='price'>値段：{{ item.price }}</div>
          <div clasee='others'>出品数：{{ item.stock }}<br/>
          ジャンル：{{ item.type }}</div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      shopItemsArray: [],
    }
  },
  created(){
    const that = this
    const shopItems = firebase
      .firestore()
      .collection('items')
      .where('shopID','==','s00001')
    shopItems.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const shopItems = doc.data()
        that.shopItemsArray = [
          ...that.shopItemsArray,
          {
            name: shopItems.description,
            type: shopItems.type,
            itemID: shopItems.itemID,
            stocks: shopItems.stocks,
            price: shopItems.price,
            img: shopItems.image,
          },
        ]
      })
    })
  }
}
</script>
