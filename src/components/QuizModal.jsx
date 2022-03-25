import React from "react";
import Question from "./Question";

const QuizModal = () => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full bg-green-500/60">
      <div className="w-full h-1/6 bg-green-700 flex items-center justify-start">
        <h2 className="px-4 text-green-100 text-xl">Chemistry Quiz-Live</h2>
      </div>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-80 h-60 sm:w-[30rem] sm:h-80 ssm:[34rem] md:w-[40rem] md:h-80 bg-white rounded-lg p-1">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
