import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

function App() {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (movie) => {
    const alreadyExists = wishlist.find(
      (item) => item.id === movie.id
    );

    if (alreadyExists) return;

    setWishlist([
      ...wishlist,
      {
        ...movie,
        status: "Plan To Watch",
      },
    ]);
  };

  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter((movie) => movie.id !== id)
    );
  };

  const updateStatus = (id, newStatus) => {
    setWishlist(
      wishlist.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            status: newStatus,
          };
        }

        return movie;
      })
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishlist={wishlist}
              addToWishlist={addToWishlist}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              updateStatus={updateStatus}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;