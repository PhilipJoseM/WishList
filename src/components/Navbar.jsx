import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center sticky top-0"> <h1 className="text-3xl font-bold text-red-500">
MovieTracker </h1>

```
  <div className="flex gap-6">
    <Link
      to="/"
      className="hover:text-red-400 transition"
    >
      Home
    </Link>

    <Link
      to="/wishlist"
      className="hover:text-red-400 transition"
    >
      Wishlist
    </Link>
  </div>
</nav>


);
}

export default Navbar;
