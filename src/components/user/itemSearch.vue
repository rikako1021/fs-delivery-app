// 商品一覧・検索ページ

<template>
    <div id="app">
        <center>
        <h1>商品一覧</h1></center>
        <button @click="returnTop" type="button">ホーム</button><br>
        <input type="text" placeholder="キーワード" v-model="keyword">
        <button @click="filteredItems" type="button">商品検索</button>
        <body>
          <div v-for="item in filteredItems" :key="item.itemID">
            <div>
              <div class='name' v-if="itemsArray">商品名：{{ item.name }}</div>
              <p v-if="itemsArray"> <img src = 'item.img' /> </p>
              <div class='price'>値段：{{ item.price }}</div>
              <div class='others'>出品数：{{ item.stock }}<br/>
              ジャンル：{{ item.type }}</div>
              <button @click="stackItem(item)" type="button">選択</button>
              <p><span id="press-button">0</span>個</p>
              <input type="button" value="+" onclick="increment()">
              <input type="button" value="-" onclick="decrement()">
            </div>
          </div>
        </body>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'searchHist',
  data() {
    return {
      keyword: '',
      itemsArray: [],
      cartItems: [],
      cnt: 0,
    }
  },
  created() {
    /* 全てのドキュメントを配列に代入 */
    const db = firebase.firestore()
    db.collection("items").get().then((docs) => {
        // success
        if (docs.exists) {
            docs.fotEach(doc => {
                this.itemsArray.push(doc.data())
            })
        }
        console.log(this.itemsArray)
    }).catch(error => {
        // error
    })
    // const querySnapshot = db.collection('items')
    //   .get()
    // console.log(querySnapshot.size)
    // console.log(querySnapshot.empty)
    // console.log(querySnapshot.doc.map(itemDoc => itemDoc.id))
    // querySnapshot.forEach((itemDoc) => {
    //   console.log(itemDoc.id, ' => ', itemDoc.data())
    // })
    // db.collection('items').get().then(function(querySnapshot) {
    //   querySnapshot.foreach(function(doc) {
    //     console.log(doc.id, " => ", doc.data())
    //     const item = doc.data()
    //     this.itemsarray = [
    //       ...this.itemsarray,
    //     {
    //         description: item.description,
    //         image: item.image,
    //         itemid: item.itemid,
    //         price: item.price,
    //         type: item.type
    //     }
    //     ]
    //   })
    // },
    // const that = this
    // const users = firebase
    //   .firestore()
    //   .collection("users")
    //   .where('userID','==','u00001')
    // users.get().then((snapshot) => {
    //   console.log(snapshot);
    //   snapshot.forEach((doc) => {
    //     const user = doc.data()
    //     that.usersArray = [
    //       ...that.usersArray,
    //       {
    //         address: user.address,
    //         city: user.city,
    //         mail: user.mail,
    //         name: user.name,
    //         prefecture: user.prefecture,
    //         userID: user.userID
    //       },
    //     ]
    //   })
    // })
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/myPage')
    },
    stackItem: function (item) {
      this.cartItems.push(
        {itemID: get_itemiD}
      )
    },
    increment: function () {
      this.cnt++
      document.getElementById("press-button").innerHTML = this.cnt
    },
    decrement: function () {
      this.cnt--
      document.getElementById("press-button").innerHTML = this.cnt
    }
  },
  computed: {
    filteredItems: function() {
      var items = []
      for (var i in this.itemsArray) {
        var item = this.itemsArray[i]
        if (item.description.indexOf(this.keyword) !== -1) {
          items.push(item)
        }
        else if (this.keyword == "") {
          items.push(item)
        }
      }
      return items
    }
  }
}
</script>