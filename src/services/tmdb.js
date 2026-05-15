import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function searchMovies(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}