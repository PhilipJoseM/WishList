import { useEffect, useState } from "react";

import {
  getTrendingMovies,
  searchMovies,
} from "../services/tmdb";

import MovieCard from "../components/MovieCard";

function Home({ wishlist, addToWishlist }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const data = await getTrendingMovies();

    setMovies(data);
  }

  async function handleSearch(event) {
    const value = event.target.value;

    setSearch(value);

    if (value.trim() === "") {
      loadMovies();
      return;
    }

    const data = await searchMovies(value);

    setMovies(data);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">
          Movie Wishlist
        </h1>

        <p className="text-slate-400 mb-6">
          Search and save movies you want to watch
        </p>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-2xl p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
        />
      </div>

      <h2 className="text-3xl font-bold mb-6">
        Trending Movies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAdd={addToWishlist}
            isWishlisted={wishlist.some(
              (item) => item.id === movie.id
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;