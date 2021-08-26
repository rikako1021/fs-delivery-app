<template>
  <div class="signup">
    <h2>ここはログイン後の店舗トップ画面</h2>

      <button @click="toMyShop">店舗情報の確認</button>
      <button @click="toMyItems">商品の管理</button>
      <button @click="toMyOrders">注文の確認</button>

  </div>
</template>

<script>
export default {
  name: 'shopTop',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toMyShop(){
      this.$router.push("/shop/myShop");
      location.reload();
    },
    toMyItems(){
      this.$router.push("/shop/myItems");
      location.reload();
    },
    toMyOrders(){
      this.$router.push("/shop/myOrders");
      location.reload();
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
