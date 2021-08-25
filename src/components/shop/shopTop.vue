<template>
  <div class="signup">
    <h2>ここはログイン後の店舗トップ画面</h2>

      <router-link to="/myShop">店舗情報に行くみたいなボタン</router-link>
      <router-link to="/myItems">商品管理に行くみたいなボタン</router-link>
      <router-link to="/myorders">注文管理に行くみたいなボタン</router-link>
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
  methods: {}
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
