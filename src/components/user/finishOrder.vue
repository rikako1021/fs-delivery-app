// 注文完了ページ

<template>
    <div id="app">
        <center>
        <h1>ご注文が完了しました</h1></center>
        <button @click="returnTop" type="button">ホーム</button><br>
    </div>
</template>

<script>
/* eslint-disable no-console */
import firebase from 'firebase'

export default {
  name: 'finishOrder',
  data() {
    return {
      cartItems: [],
      count: 0,
    }
  },
  methods: {
    returnTop: function () {
      this.$router.push('/user/userTop')
    },
  }
}
</script>
