<template>
    <div id="app">
      <center>
        <h1>ユーザー登録情報</h1></center>
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
    <button @click="returnTop" type="button">ホーム</button>
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