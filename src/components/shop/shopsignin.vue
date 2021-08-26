<template>
  <div class="signin">
    <tr>
    <td><input type="text" placeholder="Email" v-model="email"></td>
    <td><input type="password" placeholder="Password" v-model="password"></td>
    </tr>
    <button @click="shopSignIn" class="button is-success is-dark"><h2>ログイン</h2></button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'shopsingin',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    shopSignIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("ログイン成功!");
          this.$router.push("/shopTop");
        });
    }}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    border-bottom: 1px solid #EEE;
    padding-right: 80px;
    border: none;
}
tr {
  margin-right: 10px;
  text-align: center;
}
.signin {
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
</style>