// マイページ

<template>
    <div id="app">
        <center>
        <h1>ユーザホーム</h1></center>
        <button @click="returnTop" type="button">ホーム</button>
        <button @click="goItem" type="button">商品検索</button>
        <button type="button">ユーザ情報管理</button>
        <button onclick="history.back()">戻る</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'myPage',
  data() {
    return {
    }
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
