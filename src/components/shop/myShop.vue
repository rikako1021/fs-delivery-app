<!--test-->
<template>
  <div>
    <center>
      <h1>店舗情報</h1></center>
    <body>
      <div v-for="(item, index) in shopsArray" :key="index">
        <div class='shopName'>店の名前：{{ item.name }}</div>
        <div class='others'>
        店のID：{{ item.shopID }}<br/>
        住所：{{ item.shopAddress }}<br/>
        電話番号：{{ item.phoneNo }}
        </div>
      </div>
    </body>
    <div　class='backHome'>
      <router-link to="/shop/shopTop">店舗ホームに戻る</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      shopsArray: [],
    }
  },
  created(){
    const that = this
    const shops = firebase
      .firestore()
      .collection('shops')
      .where('shopID','==','s00001')
    shops.get().then((snapshot) => {
      console.log(snapshot);
      snapshot.forEach((doc) => {
        const shops = doc.data()
        that.shopsArray = [
          ...that.shopsArray,
          {
            name: shops.shopName,
            phoneNo: shops.phoneNo,
            shopID: shops.shopID,
            shopAddress: shops.shopAddress,
          },
        ]
      })
    })
  }
}
</script>
