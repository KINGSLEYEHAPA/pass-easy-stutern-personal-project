import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Dictionary = () => {
  return (
    <div className="mt-52 lg:mt-[8.5rem] flex flex-col justify-start items-center min-h-[30rem] bg-green-100 p-4 gap-6">
      <div className="h-14 w-96 flex justify-start items-center mt-8">
        <div className="flex justify-center items-center h-full w-full ">
          <input
            className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-300 rounded-tl-lg rounded-bl-lg  "
            type="text"
            placeholder="Search for a Word..."
            required
          />
          <span className="bg-green-500 h-full w-16 flex justify-center items-center text-white text-3xl rounded-tr-lg rounded-br-lg">
            <BiSearchAlt2 />
          </span>
        </div>
      </div>
      <div className=" w-full h-[40rem] ssm:w-full ssm:h-80 bg-green-300 p-4 ">
        <div className="w-full h-full bg-green-100 flex flex-col justify-start items-center gap-8">
          <div className="flex  justify-start items-center h-16 bg-green-700 w-full p-2">
            <h1 className="text-green-100 text-xl ssm:text-2xl">Dictionary</h1>
          </div>
          <div>
            {" "}
            <h2 className="text-green-500 text-4xl">Learn New Words</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
