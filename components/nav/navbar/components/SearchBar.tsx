"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import Dialogue from "../../../Dialogue";
const SearchInput = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialogue
        open={open}
        title="Search Products"
        onChange={() => setOpen(!open)}
      >
        <input
          type="search"
          name="searchProduct"
          id="searchProduct"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Search for a product..."
        />
      </Dialogue>
      <div
        className="border hidden md:flex flex-1 justify-between content-center h-10 py-2 px-4 0 cursor-pointer rounded-full "
        onClick={() => setOpen(true)}
      >
        <input
          type="search"
          placeholder="Search products..."
          className=" h-full w-full outline-none border-none flex-1 bg-inherit cursor-pointer rounded"
        />
        <Search size={30} className="h-full " />
      </div>
      <Search
        size={25}
        className="h-full md:hidden"
        onClick={() => setOpen(true)}
      />
    </>
  );
};

export default SearchInput;
