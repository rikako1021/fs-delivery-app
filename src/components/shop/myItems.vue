<template>
  <div>
    <div　class='backHomeTop'>
      <router-link to="/shop/shopTop">店舗ホームに戻る</router-link>
    </div>
    <center>
      <h1>出品一覧</h1></center>
    <body>
      <div v-for="(item, index) in shopItemsArray" :key="index" >
        <div>
          <div class='name'><p v-if="shopItemsArray">商品名：{{ item.name }}</p></div>
          <p v-if="shopItemsArray"> <img v-bind:src = "item.img"></img> </p>
          <div class='price'>値段：{{ item.price }}</div>
          <div clasee='others'>出品数：{{ item.stocks }}<br/>
          ジャンル：{{ item.type }}</div>
          <button @click="deleteItem">出品取り消し</button>
        </div>
      </div>
      <HR></HR>
      <form>
        <h3>出品フォーム</h3>
        <input v-model="inputName" placeholder="商品名"><br/>
        <input v-model="inputPrice" placeholder="値段"><br/>
        <input v-model="inputStock" placeholder="個数"><br/>
        <input v-model="inputType" placeholder="ジャンル"><br/>
        <input v-model="inputWeight" placeholder="重量(g)"><br/>
        <button type="submit" @click.prevent="newItem">出品</button>
      </form>
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
      shopItemsArray: [],
      inputName: "",
      inputPrice:"",
      inputStock:"",
      inputType:"",
      inputWeight:"",
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
  },
  methods: {
    deleteItem(){
      const shopItems = firebase
        .firestore()
      shopItems
        .collection("items")
        .doc("i00003").delete().then(() => {
        alert("取り消しました")
        console.log("出品を取り消しました");
        location.reload();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
    newItem(){
      const shopItems = firebase
        .firestore()
      shopItems
        .collection("items").doc("i00003").set({
          description: this.inputName,
          shopID: "s00001",
          price: this.inputPrice,
          stocks: this.inputStock,
          type: this.inputType,
          weight: this.inputWeight,
          image: "https://firebasestorage.googleapis.com/v0/b/fs-delivery-app.appspot.com/o/%E3%82%B5%E3%83%B3%E3%83%89%E3%82%A6%E3%82%A3%E3%83%83%E3%83%81.png?alt=media&token=a79dbbb2-ba86-49dd-97a0-432014eb76bd"
        })
        .then(() => {
          console.log("Document successfully written!");
          alert("出品しました")
          location.reload();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }
}
</script>