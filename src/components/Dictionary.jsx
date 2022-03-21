import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Dictionary = () => {
  return (
    <div className="mt-52 lg:mt-[8.5rem] flex flex-col justify-start items-center min-h-[30rem] bg-green-100">
      <div className="h-14 w-96 flex justify-start items-center mt-8">
        <div className="flex justify-center items-center h-full w-full ">
          <input
            className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-300 rounded-tl-lg rounded-bl-lg  "
            type="text"
            placeholder="Find Meaning of a Word..."
            required
          />
          <span className="bg-green-500 h-full w-16 flex justify-center items-center text-white text-3xl rounded-tr-lg rounded-br-lg">
            <BiSearchAlt2 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
