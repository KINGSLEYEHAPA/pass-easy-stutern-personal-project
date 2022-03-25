import React, { useState } from "react";
import { MdQuiz } from "react-icons/md";

const QuizPlatform = () => {
  const [dummyOption, setDummyOptions] = useState({
    examType: ["UTME", "WASSCE", "POST-UTME"],
    examYear: ["2010", "2011", "2013", "2018"],
    subjects: [
      "commerce",
      "english",
      "mathematics",
      "commerce",
      "english",
      "mathematics",
      "commerce",
      "english",
      "mathematics",
      "commerce",
      "english",
      "mathematics",
      "commerce",
      "english",
      "mathematics",
      "commerce",
      "english",
      "mathematics",
    ],
  });
  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 min-h-[30rem] w-full p-4">
      <div className="bg-green-300 h-full w-full rounded-xl p-2 flex flex-col gap-1">
        {" "}
        <div className="h-16  md:w-full bg-green-700 flex justify-between items-center px-2">
          <div className="flex gap-2">
            <span className="text-green-100 text-xl mt-2">
              <MdQuiz />
            </span>
            <h1 className="text-green-100 text-xl ssm:text-2xl">Quiz</h1>
          </div>
        </div>
        <div className="w-full h-64 bg-green-500 flex flex-col gap-1 ">
          <div className=" w-full h-2/3 ssm:h-1/3 flex flex-col ssm:flex-row gap-3 ssm:gap-2 p-6  ssm:justify-between items-center border-b-2 border-green-700 px-24">
            <select className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer">
              <option className="capitalize ">Select a Subject</option>
              {dummyOption.subjects.map((item, i) => {
                return (
                  <option key={i} value={item} className="capitalize">
                    {item}
                  </option>
                );
              })}
            </select>
            <select className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer">
              <option className="capitalize">Select Year</option>
              {dummyOption.examYear.map((item, i) => {
                return (
                  <option key={i} value={item} className="capitalize">
                    {item}
                  </option>
                );
              })}
            </select>

            <select className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer">
              <option className="capitalize">Exam Type</option>
              {dummyOption.examType.map((item, i) => {
                return (
                  <option value={item} key={i} className="capitalize">
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="bg-green-500 w-full h-1/5 ssm:h-1/3 flex justify-center items-center">
            <button className="bg-green-700 px-12 ssm:px-16 py-3 text-green-100 font-bold rounded-md text-md ssm:text-xl">
              Start Quiz
            </button>
          </div>
          <div className="bg-green-100 w-full h-1/5 ssm:h-1/3 flex justify-center items-center">
            <h2 className="text-green-500 text-2xl ssm:text-4xl">
              Take a Quiz....
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPlatform;
