<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);

const login = () => {
  if (username.value === "tmdb" && password.value === "section33") {
    router.push("./account");
  } else {
    error.value = true;
  }
};
</script>

<template>
    <div>
        <form @submit.prevent="login()">
            <input type="text" placeholder="Username" v-model='username' />
            <input type="text" placeholder="Password" v-model='password' />
            <input type="submit" value="Login" />
        </form>
    </div>

</template>

<style scoped>

</style>