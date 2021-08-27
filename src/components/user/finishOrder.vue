<template>
    <div id="app">
        <center>
        <h1>ご注文が完了しました</h1></center>
        <button class = "button" @click="returnTop" type="button">ホーム</button><br>
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
<<<<<<< HEAD

=======
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
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
<<<<<<< HEAD

</style>
=======
</style>
>>>>>>> d45971ad845475fd90157f79c4a82d90e172a498
