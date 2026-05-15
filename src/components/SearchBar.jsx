function SearchBar({ value, onChange }) {
return ( <div className="w-full max-w-2xl mx-auto"> <input
     type="text"
     placeholder="Search movies..."
     value={value}
     onChange={onChange}
     className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
   /> </div>
);
}

export default SearchBar;
