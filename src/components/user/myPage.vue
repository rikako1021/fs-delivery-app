<template>
    <div id="app">
        <h1>ユーザホーム</h1>
        <button @click="returnTop" type="button">ホーム</button>
        <button type="button">ユーザ情報管理</button>
        <input type="text" id="valueInput" placeholder="Message">
        <input type="button" id="updateButton" value="更新"/>
        <button @click="goItem" type="button">商品検索</button>
        <button onclick="history.back()">戻る</button>
        <center>
        <h1>ユーザ情報</h1></center>
        <body>
          <div v-for="user in usersArray">
            {{user.address}}
            {{user.city}}
            {{user.mail}}
            {{user.name}}
            {{user.prefecture}}
            {{user.userID}}
          </div>
        </body>
        <table>
        <tr v-for="user in users" :key="user.id">
            <td v-text="user.id"></td>
            <td v-text="user.name"></td>
            <td v-text="user.email"></td>
        </tr>
        </table>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'myPage',
  // data () {
  //   return {
  //     username: '',
  //     password: ''
  //   }
  // },
  data() {
    return {
      usersArray: [],
    }
  },
  created() {
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
            userID: user.userID
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
      this.$router.push('/user/searchHist')
    }
  }
}
</script>
