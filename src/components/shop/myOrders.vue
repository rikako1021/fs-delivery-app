<template>
  <div>
    <div　class='backHomeTop'>
      <router-link to="/shop/shopTop">店舗ホームに戻る</router-link>
    </div>
    <center>
      <h1>注文一覧</h1></center>
    <body>
      <div v-for="item in orderItemsArray">
        <div>
          <div class='name' v-if="orderItemsArray">商品名：{{ item.name }}</div>
          <div class='price'>時間：{{ item.time }}</div>
          <div clasee='others'>注文数：{{ item.quantity }}<br/>
          注文した人：{{ item.user }}</div>
        </div>
      </div>
    </body>
    <div　class='backHomeBottom'>
      <router-link to="/shop/shopTop">店舗ホームに戻る</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      orderItemsArray: [],
    }
  },
  created(){
    const that = this
    const orderItems = firebase
      .firestore()
      .collection('orders')
      .where('shopID','==','s00001')
    orderItems.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const orderItems = doc.data()
        that.orderItemsArray = [
          ...that.orderItemsArray,
          {
            name: orderItems.description,
            time: orderItems.time,
            itemID: orderItems.itemID,
            quantity: orderItems.quantity,
            user: orderItems.userID,
          },
        ]
      })
    })
  }
}
</script>
