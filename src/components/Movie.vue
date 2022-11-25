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
  let black = document.querySelector(".border");
  black.style.zIndex = "-3";
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
    backgroundImg.value = `https://image.tmdb.org/t/p/w500${x.backdrop_path}`;

    if (x.budget == "0") {
      x.budget = "unknown";
    }
    let allGenres = "";
    let i = 0
    for (i in x.genres) {
      allGenres += x.genres[i].name + ", ";
    }
    console.log(theMovieData)
    title.value = `${x.title}`;
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
    <label id="Movie">Choose a movie:</label>
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
    <input class="get-button" type="button" value="Get Movie" @click="getMovie"/>
  </div>
  <!-- <h1 class="intro">
    Start by choosing a movie and pressing the button to get information of
    the movie
  </h1>
  <p class="introPara">Welcome to the top 10 movies of all times</p>-->
  <div class="border"></div>
  <h1 class="title">{{title}}</h1>
  <div class="outer-container">
    <div class="infobox" >
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
    <iframe frameborder="0" class="video" :src="trailer"></iframe>
  </div>
  <div class="container">
    <img frameBorder="0" class="image" :src="backgroundImg" onerror="this.style.display='none'" />
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Rubik&family=Sono&display=swap');

* {
  padding: 0;
  margin: 0;
  font-family: "Kanit", "Rubik", "Roboto Condensed", sans-serif;
  color: red;
}
.border {
  position: fixed;
  top:.5%;
  left:.5%;
  background-color: black;
  z-index:0;
  height: 98%;
  width: 99%;
  border-style: solid;
  box-shadow: 0px 0px 0px 5px red;
  border-radius: 25px;
}
.form-container {
  align-items: center;
  left: 33%;
  top: -100px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: .5rem;
  border-style: solid;
  border-width: 5px;
  border-color: red;
  background-color: black;
  padding-top: 100px;
  padding-bottom: 10px;
  border-radius: 50px;
  width: 33%;
  z-index: 1;
}

#Movie {
  color: white;
  padding: .5%;
  border-radius: 20px;
  font-size: 15px;
  flex-shrink: 1;
}

.selector,
option {
  color: white;
  background-color: red;
  border-radius: 20px;
  padding: 1%;
  font-size: 15px;
  flex-shrink: 1;
}

.outer-container {
  position: absolute;
  top: 150px;
  display: grid;
  gap: 1rem;
  grid-template-columns: [first] 30px [line2] 350px [line3] 0px [line4] 200px [line5] 0px [line6] 800px [end];
  grid-template-rows: [row1-start] 450px [row1-end] 200px [last-line];
  z-index: -1;
}
.title {
  margin-top: 75px;
  display: block;
  text-align: center;
}
.image {
  height: 98%;
  width: 99%;
  position: fixed;
  left:.5%;
  top:1%;
  z-index: -2;
  filter: brightness(50%) grayscale(100%) opacity(50%);
  border-radius: 25px;
}
.infobox {
  grid-column: 4/span 1;
  grid-row: 1 /span 1;
}

.synopsisBox {
  justify-self: center;
  text-align: center;
  grid-column: 6/span 1;
  grid-row: 2 /span 1;
}

.catchBox {
  text-align: center;
  grid-column: 2/span 1;
  grid-row: 2 /span 1;
}

.poster-image {
  border-radius: 25px;
  height: 450px;
  width: 325px;
  grid-column: 2/span 1;
  grid-row: 1 /span 1;
}

.video {
  border-radius: 25px;
  height: 450px;
  width: 800px;
  grid-column: 6/span 1;
  grid-row: 1 /span 1;
}

h3 {
  font-family:Rubik;
}

h4, h5 {
  font-family: Sono;
}


.get-button {
  color: white;
  background-color: red;
  border-radius: 20px;
  padding: .25%;
  flex-shrink: 1;
}
</style>
