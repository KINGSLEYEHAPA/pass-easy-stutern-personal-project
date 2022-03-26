import React from "react";

const Question = () => {
  return (
    <div className="w-full h-full bg-green-700 rounded-lg">
      <div className="w-full h-1/6">
        <div className="w-full h-full flex justify-center items-center border-b-2 border-green-100">
          <h4 className="text-sm sm:text-lg lg:text-2xl text-green-100">
            Question 1 of 40
          </h4>
        </div>
      </div>
      <div className="w-full h-1/6  p-4 bg-green-300">
        <p className="text-sm sm:text-md text-green-700">
          <strong>Q:</strong> What is the IUPAC Name of H2SO4?
        </p>
      </div>
      <div className="w-full h-3/6 bg-green-200">
        <div className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer">
          {" "}
          <div className="px-3 py-1  ">
            {" "}
            <input type="radio" />{" "}
          </div>
          <p>This is the choice 1</p>{" "}
        </div>
        <div className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer">
          {" "}
          <div className="px-3 py-1  ">
            {" "}
            <input type="radio" />{" "}
          </div>
          <p>This is the choice 1</p>{" "}
        </div>
        <div className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer">
          {" "}
          <div className="px-3 py-1  ">
            {" "}
            <input type="radio" />{" "}
          </div>
          <p>This is the choice 1</p>{" "}
        </div>
        <div className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer">
          {" "}
          <div className="px-3 py-1 ">
            {" "}
            <input type="radio" />{" "}
          </div>
          <p>This is the choice 1</p>{" "}
        </div>
        <div className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer">
          {" "}
          <div className="px-3 py-1  ">
            {" "}
            <input type="radio" />{" "}
          </div>
          <p>This is the choice 1</p>{" "}
        </div>
      </div>
      <div className="w-full h-1/6 bg-green-300 flex justify-center items-center">
        <button className="bg-green-700 px-6 ssm:px-8 py-1 text-green-100  rounded md:rounded-md text-md ssm:text-xl outline-none">
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
