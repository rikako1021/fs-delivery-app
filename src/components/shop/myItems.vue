<template>
  <div>
    <body>

    <form>
          <h3>出品フォーム</h3>
          <input class = "input" v-model="inputName" placeholder="商品名"><br/>
          <input class = "input" v-model="inputPrice" placeholder="値段"><br/>
          <input class = "input" v-model="inputStock" placeholder="個数"><br/>
          <input class = "input" v-model="inputType" placeholder="ジャンル"><br/>
          <input class = "input" v-model="inputWeight" placeholder="重量(g)"><br/>
          <button class = "button"　type="submit" @click.prevent="newItem">出品</button>
          <hr>
    </form>

      <center>
      <h1>出品一覧</h1></center>

      <div v-for="(item, index) in shopItemsArray" :key="index" class = 'sale'>
          <div>
            <p v-if="shopItemsArray"> <img v-bind:src = "item.img"></img> </p>
            <div class='name'>
            <p v-if="shopItemsArray">{{ item.name }}</p>
            値段：￥{{ item.price }}　出品数：{{ item.stocks }}個
            </div>
            <button class = "button" @click="deleteItem">出品取り消し</button>
          </div>
      </div>

      <HR></HR>

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
.sale {
  font-size:20px;
  //float: left;
  //width: 360px;
}


.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}

.backHomeBottom{
border-radius: 40px;
  padding: 50px;
  margin: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-style: solid;
  border-color: rgb(18, 95, 63);
  box-shadow: 0px 0px 5px 0px gray;
}

.input{
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 50%;
  border: 0;
  margin: 10px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.button{
font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 20%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-bottom: 20px;
}

.name{
    font-size: 20px;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    background: $headerbg;
}

hr{
  border-top: 3px dashed;
}


</style>
