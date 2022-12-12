<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "movie") {
    router.push("./store");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="home-container">
    <h1>Log in</h1>
    <form @submit.prevent="login()">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Login" class="login-button"/>
    </form>
    <div v-if="error">
      <p>Incorrect Username or Password!</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  position: absolute ;
  top: 40%;
  left: 37.5%;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 50%;
  z-index: 2;
  background-color: rgb(13, 73, 76);
  border-radius: 25px;
  align-items: center;
  box-shadow: 0px 1px 10px 5px rgb(225, 255, 116);
}
h1 {
  color: rgb(177, 210, 59);
  margin-top: 15%;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

p {
  text-shadow: 4px 4px 3px rgb(13, 73, 76);
  color: rgb(177, 210, 59);
}
.login-button {
  background-color: rgb(177, 210, 59);
  border-style: none;
  border-radius: 3px;
  padding-top: 1%;
  padding-bottom: 1%;
  font-weight: 600;
  font-family: ;
}
input {
  color:rgb(13, 73, 76);
}
</style>