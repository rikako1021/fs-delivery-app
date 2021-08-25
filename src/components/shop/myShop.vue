<!--店舗情報画面-->
<template>
  <center>
    <h1>店舗情報</h1></center>
  <HR>
  <body>
    <div v-for="(shopID, shopName, shopAddress, phoneNo) in booksArray">
      店の名前：{{ shopName }}
      店のID：{{ shopID }}
      住所：{{ shopAddress }}
    </div>
  </body>
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
      .collection(shops)
      .where('shopID','==','s00001')
    shops.get().then((snapshot) => {
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
