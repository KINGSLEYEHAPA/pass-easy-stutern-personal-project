import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { formatTime } from "../utilities";

const PerformanceSheet = ({ onClose, results, data, time }) => {
  const today = new Date().toDateString();
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      exit={{ x: -500, opacity: 0 }}
      className="absolute top-0 left-0 z-50 w-[22.4rem] ssm:w-[23rem] h-[45rem] bg-green-500 shadow-2xl p-3"
    >
      <div className="overflow-y-auto  overflow-hidden scrollbar-hide w-full h-full">
        <div className="w-full h-6 flex justify-end items-center p-2">
          {" "}
          <span
            className="text-2xl text-green-100 font-bold cursor-pointer"
            onClick={onClose}
          >
            <AiOutlineClose />
          </span>
        </div>
        <header className="w-full  h-24 flex flex-col items-center justify-start border-b-2 border-green-100 text-green-100 p-2 ">
          <h4 className="text-2xl">Your Scoresheet</h4>
          <p>Chemistry UTME 2015 </p>
          <p className="text-gray-300">{today}</p>
        </header>
        <section className="min-h-[30rem] w-full mt-5 space-y-2">
          {results.map((result, i) => {
            return (
              <motion.div
                initial={{ x: i % 2 === 0 ? -500 : 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 30,
                  delay: i * 0.5,
                }}
                className="bg-green-300 p-2"
              >
                <p className="text-white">
                  {" "}
                  <strong className="text-green-700">Q:</strong> {result.q}
                </p>
                <div
                  className={
                    result.a === data[i].answer
                      ? "bg-green-700 text-white p-2"
                      : "bg-red-500 text-white p-2"
                  }
                >
                  <p>Your Answer: {result.a}</p>
                </div>
                {result.a !== data[i].answer && (
                  <div className="bg-white p-2">
                    {" "}
                    <p>Correct Answer: {data[i].answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </section>
        <div className="w-full h-32 bg-green-200 p-5">
          {" "}
          <p className="text-green-500">
            You answered <strong>** out of {results.length}</strong> questions
            and you finished this quiz in
            <strong> {formatTime(time)}</strong>
          </p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceSheet;
