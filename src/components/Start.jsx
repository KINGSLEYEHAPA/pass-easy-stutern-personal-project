import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Start = ({ onQuizStartHandler }) => {
  const questionLoading = useSelector((state) => state.question.isLoading);
  return (
    <div className=" bg-green-500 h-32 w-60 ssm:h-40 ssm:w-72 shadow-xl rounded-lg flex flex-col justify-center items-center">
      {questionLoading && (
        <div className="w-[2rem] h-[2rem] bg-green-700  rounded-full flex justify-center items-center relative">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-[2rem] w-[2rem] bg-green-300 rounded-full border-t-[0.3rem] border-[0.3rem] border-t-white/40 border-green-700 absolute  box-border"
          ></motion.span>
        </div>
      )}
      <p className="text-lg ssm:text-2xl text-green-100">Good luck!!</p>
      {!questionLoading && (
        <button
          onClick={onQuizStartHandler}
          className="px-6 py-1 bg-green-800 mt-6 rounded text-green-100 text-xs ssm:text-lg ssm:px-10"
        >
          Go
        </button>
      )}
    </div>
  );
};

export default Start;
