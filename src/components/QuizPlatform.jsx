import React from "react";
import { MdQuiz } from "react-icons/md";

const QuizPlatform = () => {
  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 min-h-[30rem] w-full p-4">
      <div className="bg-green-300 h-full w-full rounded-xl p-2 flex flex-col gap-1">
        {" "}
        <div className="h-24 md:h-16 md:w-full bg-green-700 flex justify-between items-center px-2">
          <div className="flex gap-2">
            <span className="text-green-100 text-xl mt-2">
              <MdQuiz />
            </span>
            <h1 className="text-green-100 text-xl ssm:text-2xl">Quiz</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPlatform;
