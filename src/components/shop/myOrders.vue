<template>
  <div>
    <div　class='backHomeTop'>
      <router-link to="/shop/shopTop">店舗ホームに戻る</router-link>
    </div>
    <center>
      <h1>注文一覧</h1></center>
    <body>
      <div v-for="item in orderItemsArray" :key="item">
        <div>
          <div class='name' v-if="orderItemsArray" id="container1"><span id="itemA">商品名</span><span id="itemB">{{ item.name }}</span></div>
          <div class='price' id="container2"><span id="itemC">時間</span><span id="itemD">{{ item.time }}</span></div>
          <div class='others' id="container3"><span id="itemE">注文数</span><span id="itemF">{{ item.quantity }}</span>
          <span id="itemG">注文した人</span><span id="itemH">{{ item.user }}</span></div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: 400%;
  font-weight: bold;
  color: #42b983;
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
input {
  margin: 10px 0;
  padding: 10px;
  width: 130%;
  font-size: 145%;
  box-shadow: 0px 0px 5px rgb(56, 56, 56) inset;
  border: none;
  border-radius: 6px;
}
td {
    padding: 30px;
    border-bottom: 1px solid #EEE;
    padding-right: 80px;
    border: none;
}
tr {
  margin-right: 10px;
  text-align: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  font-size: 120%;
  padding: 30px;
  margin-left: 50;
  box-shadow: 1px 1px 5px 3px rgb(173, 173, 173);
  border: none;
  width: 50%;
}
button h2 {
  font-family: "Hiragino Maru Gothic ProN W4";
  font-weight: bold;
}
.name {
  font-size: 300%;
  font-weight: normal;
}
.price {
  font-size: 300%;
  font-weight: normal;
}
.others {
  font-size: 300%;
  font-weight: normal;
}
.backHomeTop {
  padding: 25px;
  color: rgb(0, 0, 0);
  font-size: 160%;
  border-radius: 40px;
  padding: 50px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
}
.backHomeBottom {
  padding: 25px;
  color: rgb(0, 0, 0);
  font-size: 160%;
  border-radius: 40px;
  padding: 50px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
}

</style>
