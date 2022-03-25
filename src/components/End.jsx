import React from "react";

const End = () => {
  return (
    <div className="w-full h-full bg-green-300">
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-4/5 h-4/6 bg-green-100 p-4 md:pl-10 flex justify-center items-start ">
          <p className="mt-12 text-sm ssm:text-lg lg:text-xl">
            You scored <strong>88%</strong> in the{" "}
            <strong>Chemistry-UTME-2019</strong> quiz,You finished the quiz in{" "}
            <strong>12mins and 55secs.</strong>
          </p>{" "}
        </div>
      </div>
      <div className="w-full h-1/6 bg-fuchsia-500"></div>
    </div>
  );
};

export default End;
