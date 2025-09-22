import SearchBar from "../Ui/SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 w-full font-bold shadow-md">
      {/* Left side */}
      <div className="flex items-center gap-6 ">
        <span>Shopkero</span>
        <span>
          <SearchBar />
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        <span>Home</span>
        <span>Contact</span>
        <span>About</span>
        <span className="text-blue-500">Sign Up</span>
      </div>
    </div>
  );
};

export default Header;
