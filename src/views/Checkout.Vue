<script setup>
import CheckoutBox from "../components/CheckoutBox.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="home-container">
    <Header></Header>
    <CheckoutBox/>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;

}
</style>