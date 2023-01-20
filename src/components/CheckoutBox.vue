<script setup>
import { useStore } from "../store/index.js";
import { ref } from 'vue';

const store = useStore();
const button = ref();
const movieTitles = store.titles
const moviePosters = store.poster

function removeMovie(value) {
  for (let k in movieTitles) {
    if (value == movieTitles[k]) {
      delete movieTitles[k]
      delete moviePosters[k]
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="insideContainer">
      <div class="moviePosters">
        <img class="img" v-for="option of moviePosters" :src="option" />
      </div>
      <div class="movieTitles">
        <h2 v-for="options of movieTitles">{{ options }}</h2>
      </div>
      <div class="button">
        <button class="buttonbutton" v-for="options of movieTitles" @click="removeMovie(options)">Remove
          Movie</button>
      </div>
    </div>
  </div>

</template>
<style scoped>
.container {
  background-color: rgb(13, 73, 76);
  height: 100%;
}

.insideContainer {
  display: flex;
  width: 80%;
  background-color: rgb(177, 210, 59);
  margin-top: 200px;
  margin-left: 5%;
  border-radius: 50px;
}

h2 {
  margin-bottom: 320px;

}

.movieTitles {}

.moviePosters {
  margin-left: 10%;
  width: 20%;
}

img {
  height: 300px;
  border-radius: 20px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.button {
  width: 10%;
  display: flex;
  flex-direction: column;
}

.buttonbutton {
  margin-top: 25px;
  margin-bottom: 320px;
}
</style>
