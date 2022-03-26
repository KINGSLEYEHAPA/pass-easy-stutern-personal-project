import React from "react";

const End = ({ time, results, data, onRetry, onAnswersCheck }) => {
  return (
    <div className="w-full h-full bg-green-300">
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-5/6 h-4/6 bg-green-200 rounded p-4 md:pl-10 flex justify-center items-start ">
          <p className="mt-12 text-sm ssm:text-lg lg:text-xl text-green-500">
            You scored <strong>88%</strong> in the{" "}
            <strong>Chemistry-UTME-2019</strong> quiz,You finished the quiz in{" "}
            <strong>12mins and 55secs.</strong>
          </p>{" "}
        </div>
      </div>
      <div className="w-full h-1/6 flex justify-center items-center gap-5">
        <button className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100 rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none">
          Quiz
        </button>
        <button className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100 rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none">
          Retry
        </button>
        <button className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100  rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none">
          See Answers
        </button>
      </div>
    </div>
  );
};

export default End;
