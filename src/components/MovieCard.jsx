function MovieCard({
movie,
onAdd,
onRemove,
isWishlisted,
onStatusChange,
}) {
const imageUrl = movie.poster_path
? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
: "https://via.placeholder.com/500x750";

return ( <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800"> <img
     src={imageUrl}
     alt={movie.title}
     className="w-full h-[400px] object-cover"
   />

```
  <div className="p-4">
    <h2 className="text-lg font-bold mb-2">
      {movie.title}
    </h2>

    <div className="flex justify-between text-sm text-slate-400 mb-4">
      <span>
        ⭐ {movie.vote_average?.toFixed(1)}
      </span>

      <span>
        {movie.release_date
          ? movie.release_date.split("-")[0]
          : "N/A"}
      </span>
    </div>

    {isWishlisted ? (
      <>
        <select
          value={movie.status || "Plan To Watch"}
          onChange={(e) =>
            onStatusChange(movie.id, e.target.value)
          }
          className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 mb-3"
        >
          <option>Plan To Watch</option>
          <option>Watching</option>
          <option>Completed</option>
        </select>

        <button
          onClick={() => onRemove(movie.id)}
          className="w-full bg-red-600 hover:bg-red-700 p-2 rounded-lg"
        >
          Remove
        </button>
      </>
    ) : (
      <button
        onClick={() => onAdd(movie)}
        className="w-full bg-red-600 hover:bg-red-700 p-2 rounded-lg"
      >
        Add To Wishlist
      </button>
    )}
  </div>
</div>


);
}

export default MovieCard;
