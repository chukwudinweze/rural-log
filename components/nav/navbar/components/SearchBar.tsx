import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="border hidden md:flex flex-1 justify-between content-center h-10 py-2 px-4 0 cursor-pointer rounded-full ">
        <input
          disabled
          type="search"
          placeholder="Search products..."
          className=" h-full w-full outline-none border-none flex-1 bg-inherit cursor-pointer rounded"
        />
        <Search size={20} className="h-full" />
      </div>
      <Search size={25} className="h-full md:hidden" />
    </>
  );
};

export default SearchBar;
