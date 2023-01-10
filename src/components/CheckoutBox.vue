<script setup>
import { useStore } from "../store/index.js";
const store = useStore();
const movieTitles = store.titles
const moviePosters = store.poster

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
    width: 90%;
    background-color: rgb(177, 210, 59);
    margin-top: 200px;
    margin-left: 5%;
    border-radius: 50px;
}

h2 {
    margin-bottom: 320px;
 
}
.movieTitles {
}
.moviePosters {
    margin-left: 10%;
    width: 20%;
}
img {
    height: 300px;
    border-radius: 20px;
    margin-top: 25px;
    margin-bottom:25px;
}
</style>
