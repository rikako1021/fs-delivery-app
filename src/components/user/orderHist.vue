// 注文履歴

<template>
  <div>
    <body>
      <div class = "items">
        <center>
        <h1>注文履歴</h1></center>

        <div v-for="(item, index) in histitemsArray" :key="index" class = 'sale'>
            <div>
                <p v-if="histitemsArray"></p>
                <img v-bind:src = "item.image" class="float_l"></img>
                <div class='name'>
                  <p v-if="histitemsArray">{{ item.name }}</p>
                  値段：￥{{ item.price }}<br/>
                  <button class = "button" @click="goToCart(item)">再度購入</button>
                </div>
            </div>
        </div>
        <center>
        <h1 v-if="histitemsArray === null">履歴はありません</h1></center>
        <button class = "button" @click="clearHistory" v-if="histitemsArray">履歴をクリア</button>
      </div>

      <HR></HR>

    </body>
    <div　class='backHomeBottom'>
      <router-link to="/user/userTop">ホームに戻る</router-link>
    </div>
  </div>

</template>

<script>
/* eslint-disable no-console */
import firebase from 'firebase'

export default {
  name: 'orderHist',
  data() {
    return {
      histitemsArray: [],
      cartArray: [],
    }
  },
  mounted() {
    this.histitemsArray = JSON.parse(localStorage.getItem('obj'))
    console.log(this.histitemsArray)
  },
  methods: {
    goToCart: function(item) {
      this.cartArray.push(item)
      sessionStorage.setItem('obj', JSON.stringify(
        this.cartArray
      ))
      console.log(sessionStorage)
      this.$router.push('/user/confirmOrder')
    },
    clearHistory: function () {
      localStorage.clear()
      location.reload()
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
  margin: auto;
  padding: 100px;
  padding-left: 30%;
  padding-bottom: 0px;
}

.items{
  margin-bottom: 10%;
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
  margin-bottom: 5%;
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
    margin: 0px auto;
    margin-right: 30%;
    padding-top:40px;
    line-height: 200%;
}

hr{
  border-top: 3px dashed;
}

.float_l {
	float: left;
}


</style>
