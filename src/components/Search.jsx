import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <input
        className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-500  "
        type="text"
        placeholder="Practice a subject?"
        required
      />
      <span className="bg-green-500 h-full w-16 flex justify-center items-center text-white text-2xl">
        <BiSearchAlt2 />
      </span>
    </div>
  );
};

export default Search;
