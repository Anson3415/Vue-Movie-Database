<script setup>
import axios from "axios";
import { ref } from "vue";

const movie = ref(null);
const movieData = ref(null);
const title = ref(null);
const trailer = ref(null);
const backgroundImg = ref(null);
const posterImg = ref(null);
const tagline = ref(null);
const average = ref(null);
const releaseDate = ref(null);
const ogLang = ref(null);
const runtime = ref(null);
const synopsis = ref(null);
const revenue = ref(null);
const budget = ref(null);
const genres = ref(null);
const apiKey = "0b1c758bd817d852620ef1f545ca218c";

const getMovie = () => {
  movieData.value = (
    axios.get(`https://api.themoviedb.org/3/movie/${movie.value}`,
      {
        params: {
          api_key: apiKey,
          append_to_response: "videos",
        },
      })
  );
  movieData.value = movieData.value.then((theMovieData) => {
    let x = theMovieData.data;
    const trailers = x.videos.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    posterImg.value = `https://image.tmdb.org/t/p/w500${x.poster_path}`;
    trailer.value = `https://www.youtube.com/embed/${trailers.at(0).key}`;
    backgroundImg.src = `https://image.tmdb.org/t/p/w500${x.backdrop_path}`;

    if (x.budget == "0") {
      x.budget = "unknown";
    }
    let allGenres = "";
    let i = 0
    for (i in x.genres) {
      allGenres += x.genres[i].name + ", ";
    }
    console.log(theMovieData)
    title.value =`${ x.title}`;
    tagline.value = x.tagline;
    average.value = x.vote_average;
    releaseDate.value = x.release_date;
    ogLang.value = x.original_language;
    runtime.value = x.runtime;
    synopsis.value = x.overview;
    revenue.value = x.revenue;
    budget.value = x.budget;
    genres.value = allGenres;
  })
};
</script>

<template>
  <div class="form-container">
      <label for="Movie">Choose a movie:</label>
      <select class="selector" name="Movies" id="movie-options" v-model="movie">
        <option value="791373">Zack Snyder's Justice League</option>
        <option value="27205">Inception</option>
        <option value="718930">Bullet Train</option>
        <option value="157336">Interstellar</option>
        <option value="293660">Deadpool</option>
        <option value="810693">Jujutsu Kaisen 0</option>
        <option value="424783">Bumblebee</option>
        <option value="209112">Batman v Superman: Dawn of Justice</option>
        <option value="436969">The Suicide Squad</option>
        <option value="299534">Avengers: Endgame</option>
      </select>
      <input class="get-button" type="button" value="Get Movie" @click="getMovie" />
  </div>
  <h1 class="intro">
    Start by choosing a movie and pressing the button to get information of
    the movie
  </h1>
  <p class="introPara">Welcome to the top 10 movies of all times</p>
  <img class="arrow" src="D:\Movie Database-API project\red-neon-arrow-4.png" />
  <img class="bkgdrop" src="D:\Movie Database-API project\280157.webp" />
  <div class="border"></div>
  <h1 class="title"></h1>
  <div class="infobox">
    <h3>Average Rating:</h3>
    <h5>{{ average }}/10</h5>
    <br>
    <h3>Release Date:</h3>
    <h5>{{ releaseDate }}</h5>
    <br>
    <h3>Budget:</h3>
    <h5>${{ budget }}</h5>
    <br>
    <h3>Revenue: </h3>
    <h5>${{ revenue }}</h5>
    <br>
    <h3>Genres: </h3>
    <h5>{{ genres }}</h5>
    <br>
    <h3>Original Language: </h3>
    <h5>{{ ogLang }}</h5>
    <br>
    <h3>Runtime:</h3>
    <h5>{{ runtime }} mins</h5>
  </div>
  <div class="synopsisBox">
    <h3>Synopsis: </h3>
    <h4 frameBorder="0" class="info">{{ synopsis }}</h4>
  </div>
  <div class="catchBox">
    <h3>Catchphrase: </h3>
    <h4 frameBorder="0" class="catch">{{ tagline }}</h4>
  </div>
  <img :src="posterImg" frameBorder="0" class="poster-image" onerror="this.style.display='none'" />
  <div class="outer-containder"></div>
  <div class="container">
    <img frameBorder="0" class="image" :src="backgroundImg" onerror="this.style.display='none'" />
  </div>
  <iframe frameborder="0" class="video" :src="trailer"></iframe>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Rubik&family=Sono&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: "Kanit", "Rubik", "Roboto Condensed", sans-serif;
  color: red;
}

</style>
