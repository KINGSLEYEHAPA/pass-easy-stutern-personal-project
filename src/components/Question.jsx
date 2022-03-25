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
        <p className="text-sm sm:text-md lg:text-lg text-green-700">
          <strong>Q:</strong> What is the IUPAC Name of H2SO4?
        </p>
      </div>
      <div className="w-full h-3/6 bg-green-200">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full h-1/6 bg-green-300"></div>
    </div>
  );
};

export default Question;
