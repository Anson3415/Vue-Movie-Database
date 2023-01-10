<script setup>
import Hero from "../components/Hero.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useStore } from "../store/index.js";
import axios from 'axios';
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const movieData = ref([]);
const selectedMovie = ref(null);
let open = false;
const modal = ref();
const modalIn = ref()
const store = useStore();
await store.getMovies();
const theMovies = store.movies
const thePoster = store.poster
const theTitles = store.titles

function closeModal() {
    modal.value.style.display = "none"
    modalIn.value.style.display = "none"
    console.log("close")
}
function addToCart() {
    theTitles.push(movieData.value[3])
    thePoster.push(movieData.value[0])

}
function getDetails(value) {
    if (open == false) {
        modal.value.style.display = "inline"
        modalIn.value.style.display = "inline"
        open = true
    } else {
        modal.value.style.display = "none"
        modalIn.value.style.display = "none"
        open = false
    }

    selectedMovie.value = (
        axios.get(`https://api.themoviedb.org/3/movie/${value}`,
            {
                params: {
                    api_key: "0b1c758bd817d852620ef1f545ca218c",
                    append_to_response: "videos",
                },
            })
    );
    selectedMovie.value = selectedMovie.value.then((theMovieData) => {
        let data = theMovieData.data;
        const trailers = data.videos.results.filter(
            (trailer) => trailer.type === "Trailer"
        )
        if (data.budget == "0") {
            data.budget = "unknown";
        }
        let allGenres = "";
        let i = 0
        for (i in data.genres) {
            allGenres += data.genres[i].name + ", ";
        }
        movieData.value[0] = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        movieData.value[1] = `https://www.youtube.com/embed/${trailers.at(0).key}`;
        movieData.value[2] = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
        movieData.value[3] = `${data.title}`;
        movieData.value[4] = data.tagline;
        movieData.value[5] = data.vote_average;
        movieData.value[6] = data.release_date;
        movieData.value[7] = data.original_language;
        movieData.value[8] = data.runtime;
        movieData.value[9] = data.overview;
        movieData.value[10] = data.revenue;
        movieData.value[11] = data.budget;
        movieData.value[12] = allGenres;
    })
}

</script>

<template >
    <div class="home-container">
        <Header class="storebkg">
        </Header>
        <Hero class="store" id="gray" />
        <h1>Trending</h1>
        <div class="movie-container">
            <img class="img" v-for="option of theMovies" :src="option.poster" :value=option.id
                @click="getDetails(option.id)" />
        </div>
        <div class="outerModal" ref="modal" @click="closeModal()">
        </div>
        <div class="modalContainer" ref="modalIn">

            <img src="\src\assets\482185-200.png" @click="getDetails()" />
            <button @click="addToCart()">Add movie</button>
            <h1 class="title">{{ title }}</h1>
            <img class="modalImage" :src="movieData[0]" onerror="this.style.display='none'" />
            <iframe class="trailer" :src="movieData[1]" onerror="this.style.display='none'"></iframe>
            <img :src="movieData[2]" class="backdrop" onerror="this.style.display='none'">
            <h3>Average Rating:</h3>
            <h5>{{ movieData[5] }}/10</h5>
            <br>
            <h3>Release Date:</h3>
            <h5>{{ movieData[6] }}</h5>
            <br>
            <h3>Budget:</h3>
            <h5>${{ movieData[11] }}</h5>
            <br>
            <h3>Revenue: </h3>
            <h5>${{ movieData[10] }}</h5>
            <br>
            <h3>Genres: </h3>
            <h5>{{ movieData[12] }}</h5>
            <br>
            <h3>Original Language: </h3>
            <h5>{{ movieData[7] }}</h5>
            <br>
            <h3>Runtime:</h3>
            <h5>{{ movieData[8] }} mins</h5>
            <div class="synopsisBox">
                <h3>Synopsis: </h3>
                <h4 frameBorder="0" class="info">{{ movieData[9] }}</h4>
            </div>
            <div class="catchBox">
                <h3>Catchphrase: </h3>
                <h4 frameBorder="0" class="catch">{{ movieData[4] }}</h4>
            </div>
        </div>

    </div>
    <Footer></Footer>
</template>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.home-container {
    display: flex;
    flex-direction: column;


}

.movie-container {
    position: absolute;
    top: 30%;
    left: 5%;
    width: 90%;
    display: flex;
    overflow: scroll;
    height: 40%;
    gap: 1%;
    border-radius: 20px;

}

.movie-container::-webkit-scrollbar {
    height: 10px;
    width: 0px;
}

.movie-container::-webkit-scrollbar-track {
    background: none;
}

.movie-container::-webkit-scrollbar-thumb {
    background: rgb(177, 210, 59);
    border-radius: 5px;
}

.movie-container::-webkit-scrollbar-thumb:hover {
    background: rgb(124, 147, 41);
}


.img {
    border-radius: 20px;
}

h1 {
    display: block;
    color: white;
    position: absolute;
    top: 20%;
    left: 5%;
}

.modalContainer {
    display: grid;
    position: fixed;
    grid-template-columns: ;
    grid-template-rows: ;
    background-color: red;
    position: absolute;
    top: 20%;
    left: 15%;
    height: 75%;
    width: 70%;
    z-index: 2;
    display: none;

}

.outerModal {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: none;
    background-color: black;
    opacity: 80%;
}
.backdrop {
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute;
    top: 0%;
    left: 0%;
}
h5,h3,h4 {
    background-color: white;
}
</style>
