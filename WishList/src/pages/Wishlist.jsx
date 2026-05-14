import MovieCard from "../components/MovieCard";

function Wishlist({
wishlist,
removeFromWishlist,
updateStatus,
}) {
return ( <div className="min-h-screen bg-slate-950 text-white px-6 py-10"> <h1 className="text-4xl font-bold mb-8">
My Wishlist </h1>

```
  {wishlist.length === 0 ? (
    <p className="text-slate-400">
      No movies added yet.
    </p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {wishlist.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isWishlisted={true}
          onRemove={removeFromWishlist}
          onStatusChange={updateStatus}
        />
      ))}
    </div>
  )}
</div>


);
}

export default Wishlist;
