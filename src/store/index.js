import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

export const useStore = defineStore("store", {
  state: () => {
    return {
      movies: [],
      titles: [],
      poster: [],
    };
  },
  actions: {
    async getMovies() {
      let data = (
        await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
          params: {
            api_key: "0b1c758bd817d852620ef1f545ca218c",
          },
        })
      ).data.results;

      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        };
      });
    },
  },
});
