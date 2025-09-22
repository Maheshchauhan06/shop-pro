const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-md rounded-2xl bg-white px-3 py-2 shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 w-full bg-transparent outline-none text-sm placeholder-gray-400 text-black"
      />
    </div>
  );
};

export default SearchBar;
