<template>
  <div>
    <center>
      <h1>店舗情報</h1></center>
    <body>
      <div v-for="(item, index) in shopsArray" :key="index">
        <div class='shopName'  id="container1"><span id="itemA">店の名前</span><span id="itemB">{{ item.name }}</span></div>
        <div class='others' id="container2">
        <span id="itemC">店のID</span><span id="itemD">{{ item.shopID }}</span>
        <span id="itemE">住所</span><span id="itemF">{{ item.shopAddress }}</span>
        <span id="itemG">電話番号</span><span id="itemH">{{ item.phoneNo }}</span>
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
  font-size: 300%;
  font-weight: normal;
}
.others {
  font-size: 300%;
  font-weight: normal;
}
.backHome {
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
#container1 {
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 300px 300px 1fr 300px;
}
#itemA {
  grid-row: 1;
  grid-column: 2;
  border-top: 3px solid;
  border-left: 3px solid;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#itemB {
  grid-row: 1;
  grid-column: 3;
  border-top: 3px solid;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#container2 {
  display: grid;
  grid-template-rows: 80px 80px 80px 100px;
  grid-template-columns: 300px 300px 1fr 300px;
}
#itemC {
  grid-row: 1;
  grid-column: 2;
  border-left: 3px solid;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#itemD {
  grid-row: 1;
  grid-column: 3;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#itemE {
  grid-row: 2;
  grid-column: 2;
  border-left: 3px solid;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#itemF {
  grid-row: 2;
  grid-column: 3;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
#itemG {
  grid-row: 3;
  grid-column: 2;
  border-left: 3px solid;
  border-bottom: 3px solid;
  border-right: 3px solid;
}
#itemH {
  grid-row: 3;
  grid-column: 3;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
</style>