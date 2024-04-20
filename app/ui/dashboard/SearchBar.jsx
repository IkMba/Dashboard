import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <div className="flex-1 flex items-center">
      <span className="absolute px-2 text-lg">
        <MdSearch className="" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="bg-bg-lighter px-8 py-2 rounded-lg border-0 outline-0 text-sm"
      />
    </div>
  );
}

export default SearchBar;
