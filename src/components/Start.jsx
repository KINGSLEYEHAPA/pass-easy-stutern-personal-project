import React from "react";
import { motion } from "framer-motion";

const Start = () => {
  return (
    <div className="absolute top-[40%] left-[40%] bg-green-500 h-40 w-72 shadow-xl rounded-lg flex flex-col justify-center items-center">
      <div className="w-[2rem] h-[2rem] bg-green-700  rounded-full flex justify-center items-center relative">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, loop: Infinity, ease: "linear" }}
          className="h-[2rem] w-[2rem] bg-green-300 rounded-full border-t-[0.3rem] border-[0.3rem] border-t-white/40 border-green-700 absolute  box-border"
        ></motion.span>
      </div>
      <p className="text-2xl text-green-100">Good luck!!</p>
      <button className="px-6 py-1 bg-green-100 mt-6 rounded">Go</button>
    </div>
  );
};

export default Start;
