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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: 100px;
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
.shopName {
  font-size: 60px;
  font-weight: normal;
}
.others {
  font-size: 60px;
  font-weight: normal;
}
</style>
