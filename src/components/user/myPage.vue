<template>
    <div id="app">
      <center>
        <h1>ユーザー情報</h1></center>
      <body>
        <div v-for="(item, index) in usersArray" :key="index">
          <div class='shopName'  id="container1"><span id="itemA">名前</span><span id="itemB">{{ item.name }}</span></div>
          <div class='others' id="container2">
          <span id="itemC">ユーザーID</span><span id="itemD">{{ item.userID }}</span>
          <span id="itemE">住所</span><span id="itemF">{{ item.prefecture }}都{{ item.city }}{{ item.address }}</span>
          <span id="itemG">メールアドレス</span><span id="itemH">{{ item.mail }}</span>
          <span id="itemI">フードロス[g]</span><span id="itemJ">{{ item.totalWeight }}</span>
          </div>
        </div>
      </body>
    <button class = backHome @click="returnTop" type="button">ホーム</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'myPage',
  data() {
    return {
      usersArray: [],
    }
  },
  created() {
    /* 全てのドキュメントを配列に代入 */
    const that = this
    const users = firebase
      .firestore()
      .collection("users")
      .where('userID','==','u00001')
    users.get().then((snapshot) => {
      console.log(snapshot);
      snapshot.forEach((doc) => {
        const user = doc.data()
        that.usersArray = [
          ...that.usersArray,
          {
            address: user.address,
            city: user.city,
            mail: user.mail,
            name: user.name,
            prefecture: user.prefecture,
            totalWeight: user.totalWeight,
            userID: user.userID,
          },
        ]
      })
    })
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/userTop')
    },
    goItem: function () {
      this.$router.push('/user/itemSearch')
    }
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
  grid-template-columns: 300px 400px 1fr 300px;
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
  grid-template-rows: 80px 80px 80px 80px 100px;
  grid-template-columns: 300px 400px 1fr 300px;
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
#itemI {
  grid-row: 4;
  grid-column: 2;
  border-left: 3px solid;
  border-bottom: 3px solid;
  border-right: 3px solid;
}
#itemJ {
  grid-row: 4;
  grid-column: 3;
  border-right: 3px solid;
  border-bottom: 3px solid;
}
</style>
