<script setup>
import Hero from "../components/Hero.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="home-container">
    <Header></Header>
    <Hero/>
    <Footer></Footer>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}
</style>