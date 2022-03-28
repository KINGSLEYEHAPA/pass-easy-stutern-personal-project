import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatTime } from "../utilities";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

const PerformanceSheet = ({
  onClose,
  results,
  data,
  time,
  quizInfo,
  sendResult,
}) => {
  const today = new Date().toDateString();
  const correctAnswers = useSelector(
    (state) => state.performance.correctAnswersPerSession
  );
  const sessionScore = Math.floor((correctAnswers / data.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, type: "spring" }}
      exit={{ x: -500, opacity: 0 }}
      className="absolute top-0 left-0 z-50 w-[22.4rem] ssm:w-[23rem] h-full bg-green-500 shadow-2xl p-3"
    >
      <div className="overflow-y-auto  overflow-hidden scrollbar-hide w-full h-full">
        <div className="w-full h-6 flex justify-end items-center p-2 bg-green-700 pt-4">
          {" "}
          <span
            className="text-md text-green-100 font-bold cursor-pointer"
            onClick={onClose}
          >
            Close
          </span>
        </div>
        <header className="w-full  h-24 flex flex-col items-center justify-start border-b-2 border-green-100 text-green-100 p-2 bg-green-700 ">
          <h4 className="text-xl">Your Scoresheet</h4>
          <p>
            {quizInfo.examName} {quizInfo.examType} {quizInfo.examYear}{" "}
          </p>
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
                key={i}
                className="bg-green-300 p-2"
              >
                <p className="text-white">
                  {" "}
                  <strong className="text-green-700">Q{i + 1}:</strong>{" "}
                  {result.q}
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
            You answered{" "}
            <strong>
              {correctAnswers} out of {results.length}
            </strong>{" "}
            questions ({sessionScore}%) and you finished this quiz in
            <strong> {formatTime(time)}</strong>
          </p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceSheet;
