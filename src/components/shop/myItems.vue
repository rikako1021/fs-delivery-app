<!--商品一覧画面-->
<template>
  <div>
    <v-row justify="center" align="center">
      <v-col
        v-for="item in shopItemsArray"
        :key="index"
        cols="8"
        sm="6"
        md="4"
        lg="3"
        xl="1"
      >
        <v-flex>
          <v-card class="mt-2 mx-2" height="300px" width="300px" :elevation="5">
            <v-img
              class="white--text align-end"
              height="100px"
              :src="item.img"
            ></v-img>
            <v-card-title class="font-weight-bold">
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle>
              値段：{{ item.price }}<v-spacer />カテゴリー：{{ item.type }}
            </v-card-subtitle>
            <v-card-subtitle>在庫：{{ item.stocks }}</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-col>
    </v-row>
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
