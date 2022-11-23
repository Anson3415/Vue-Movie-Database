<script setup>
import { ref } from 'vue'
const apiKey = "0b1c758bd817d852620ef1f545ca218c";
let selectedMovie = "";
let selectedid = "";
let gate = true;
let infoBox = document.querySelector(".infobox")
let sBox = document.querySelector(".synopsisBox")
let cBox = document.querySelector(".catchBox")
infoBox.style.display = "none"
cBox.style.display = "none"
sBox.style.display = "none"
function myFunction() {
  cBox.style.display = "block"
  sBox.style.display = "block"
  infoBox.style.display = "block"
  let voteAverage = document.querySelector("#ai");
  let releaseDate = document.querySelector("#bi");
  let budget = document.querySelector("#ci");
  let revenue = document.querySelector("#di");
  let genre = document.querySelector("#ei");
  let ogLang = document.querySelector("#fi");
  let runtime = document.querySelector("#gi");
  let background = document.querySelector(".bkgdrop");
  let arrow = document.querySelector(".arrow");
  let intro = document.querySelector(".intro");
  let intropara = document.querySelector(".introPara");
  let c = document.querySelector(".catch");
  let h1 = document.querySelector(".title");
  let p = document.querySelector(".info");
  let img = document.querySelector(".image");
  let iframe = document.querySelector(".video");
  let selected = document.querySelector(".selector");
  let poster = document.querySelector(".poster-image");
  let selectedvalue = selected.value;
  if (gate === true) {
    gate = false;
    background.remove();
    intro.remove();
    arrow.remove();
    intropara.remove();
  }

  let response = axios.get(
    `https://api.themoviedb.org/3/movie/${selectedvalue}`,
    {
      params: {
        api_key: apiKey,
        append_to_response: "videos",
      },
    }
  );
  response = response.then((movieData) => {
    console.log(movieData);
    const trailers = movieData.data.videos.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    poster.src = `https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`;
    img.style.display = "block";
    poster.style.display = "block";
    iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`;
    img.src = `https://image.tmdb.org/t/p/w500${movieData.data.backdrop_path}`;
    h1.innerHTML = `${movieData.data.title}`;
    let x = movieData.data;
    let allGenres = "";
    if (x.budget == "0") {
      x.budget = "unknown";
    }
    for (i in x.genres) {
      allGenres += x.genres[i].name + ", ";
    }
    c.innerHTML = `${x.tagline}`;
    voteAverage.innerHTML = `${x.vote_average}/10`;
    releaseDate.innerHTML = `${x.release_date} `;
    budget.innerHTML = `$${x.budget}`;
    revenue.innerHTML = `$${x.revenue}`;
    genre.innerHTML = `${allGenres} `;
    ogLang.innerHTML = `${x.original_language} `;
    runtime.innerHTML = `${x.runtime} mins`;
    p.innerHTML = `${x.overview}`;
  });
}
let element = document.querySelector(".get-button");

element.addEventListener("click", myFunction);

</script>

<template>
 <!DOCTYPE html>
<html lang="en">
  <head>
    <title>10 movies you must watch!</title>
    <link rel="icon" href="D:\Movie Database-API project\wm_logo3s_2018.png" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
    <script src="Script.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Rubik&family=Sono&display=swap');
    </style> -->
  </head>
  <body>
    <div class="form-container">
      <form>
        <label for="Movie">Choose a movie:</label>
        <select class="selector" name="Movies" id="movie-options">
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
        <input class="get-button" type="button" value="Get Movie" />
      </form>
    </div>
    <h1 class="intro">
      Start by choosing a movie and pressing the button to get information of
      the movie
    </h1>
    <p class="introPara">Welcome to the top 10 movies of all times</p>
    <img
      class="arrow"
      src="D:\Movie Database-API project\red-neon-arrow-4.png"
    />
    <img class="bkgdrop" src="D:\Movie Database-API project\280157.webp" />
    <div class="border"></div>
    <h1 class="title"></h1>
    <div class="infobox">
    <h3>Average Rating:</h3>
    <h5 id="ai"></h5>
    <br>
    <h3>Release Date:</h3>
    <h5 id="bi"></h5>
    <br>
    <h3>Budget:</h3>
    <h5 id="ci"></h5>
    <br>
    <h3>Revenue: </h3>
    <h5 id="di"></h5>
    <br>
    <h3>Genres: </h3>
    <h5 id="ei"></h5>
    <br>
    <h3>Original Language: </h3>
    <h5 id="fi"></h5>
    <br>
    <h3>Runtime:</h3>
    <h5 id="gi"></h5>
    </div>
  <div class= "synopsisBox">
    <h3>Synopsis: </h3>
    <h4 frameBorder="0" class="info"></h4>
  </div>
  <div class="catchBox">
    <h3>Catchphrase: </h3>
    <h4 frameBorder="0" class="catch"></h4>
  </div>
    <img
      src=""
      frameBorder="0"
      class="poster-image"
      onerror="this.style.display='none'"
    />
    <div class="outer-containder"></div>
    <div class="container">
      <img
        frameBorder="0"
        class="image"
        src=""
        onerror="this.style.display='none'"
      />
    </div>
    <iframe frameborder="0" class="video" src=""></iframe>
  </body>
</html>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Rubik&family=Sono&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: "Kanit", "Rubik", "Roboto Condensed", sans-serif;
  color: red;
}

.container {
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  top: 10px;
  z-index: 1;
  opacity: 0.5;
}

.video {
  border-radius: 10px;
  position: absolute;
  top: 200px;
  left: 47.5%;
  height: 450px;
  width: 750px;
  z-index: 5;
}
.image {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-filter: brightness(75%) grayscale(25%);
  z-index: -1;
  opacity: 0.5;
}
.title {
  font-family: "Kanit";
  width: 100%;
  text-align: center;
  position: absolute;
  top: 100px;
  z-index: 4;
  font-size: 48px;
}
.info {
  position: absolute;
  left: 800px;
  width: 650px;
  top: 700px;
  z-index: 4;
}
.poster-image {
  border-radius: 10px;
  height: 450px;
  width: 300px;
  position: absolute;
  left: 3%;
  top: 200px;
  z-index: 4;
}
.catch {
  opacity: 1 !important;
  position: absolute;
  top: 700px;
  left: 50px;
  text-align: center;
  z-index: 4;
  width: 300px;
  max-width: 300px;
}

.form-container {
  width: 33%;
  height: 150px;
  background-color: rgb(0, 0, 0);
  border-color: rgb(255, 0, 0);
  border-radius: 50px;
  border-style: solid;
  border-width: 9px;
  position: fixed;
  top: -100px;
  left: 33%;
  z-index: 10;
}
.form-container label {
  color: white;
  position: relative;
  top: 100px;
  left: 15px;
}
.form-container select option {
  color: white;
}
.form-container select {
  background-color: red;
  font-size: 15px;
  color: white;
  border-width: 3px;
  border-color: rgb(255, 0, 0);
  position: relative;
  top: 100px;
  left: 20px;
  border-radius: 10px;
  height: 35px;
}
.get-button {
  top: 100px;
  width: 75px;
  position: relative;
  left: 20px;
  border-radius: 15px;
  background-color: red;
  border-color: rgb(255, 0, 0);
  color: white;
}
.outer-containder {
  position: absolute;
  height: 870px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  border-radius: 25px;
  z-index: -10;
}
.border {
  position: fixed;
  top: 1%;
  left: 0.5%;
  height: 98%;
  width: 99%;
  border-radius: 25px;
  box-shadow: 0px 0px 0px 100px rgb(255, 0, 0);
  z-index: 5;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgb(255, 0, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2f2f2f;
}
.introPara {
  position: absolute;
  top: 300px;
  width: 100%;
  text-align: center;
  z-index: 1;
}
.intro {
  position: absolute;
  top: 250px;
  width: 100%;
  text-align: center;
  z-index: 1;
}
.arrow {
  position: absolute;
  left: 700px;
  top: 90px;
  height: 150px;
  width: 175px;
  transform: rotate(-90deg);
  z-index: 1;
  -webkit-filter: saturate(100%);
}
.bkgdrop {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
  -webkit-filter: blur(0px) brightness(50%);
}
body {
  overflow-x: hidden;
}
h5,h4{
  font-family: "Sono";
}
h3 {
  font-family: "Rubik";
}

.infobox {
  position: absolute;
  top: 200px;
  left: 400px;
  z-index: 4;
}
.synopsisBox h3 {
  position: absolute;
  top: 670px;
  right: 400px;
  z-index: 4;
}

.catchBox  h3 {
  position: absolute;
  left:130px;
  top:670px;
  z-index: 4;
}

</style>
