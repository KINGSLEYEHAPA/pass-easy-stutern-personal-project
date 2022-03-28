import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import { formatTime } from "../utilities";

const End = ({
  time,
  results,
  data,
  onRetry,
  onAnswersCheck,
  setQuizStart,
  quizInfo,
  sendResult,
}) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(0);
  const sessionScore = Math.floor((correctAnswers / data.length) * 100);
  const today = new Date().toDateString();

  let commentOnScore;
  if (sessionScore >= 90) {
    commentOnScore = "Superb";
  } else if (sessionScore >= 70 && sessionScore < 90) {
    commentOnScore = "Excellent";
  } else if (sessionScore >= 60 && sessionScore < 70) {
    commentOnScore = "Just Okay";
  } else if (sessionScore >= 40 && sessionScore < 60) {
    commentOnScore = "Average";
  } else if (sessionScore < 40) {
    commentOnScore = "Poor";
  }

  const dispatch = useDispatch();
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);

    dispatch({ type: actionTypes.CORRECT_ANSWERS, payload: correct });
    setScore(Math.floor((correctAnswers / data.length) * 100));
  }, [correctAnswers]);

  const performanceInfo = {
    subject: quizInfo.examName,
    type: quizInfo.examType,
    year: quizInfo.examYear,
    score: sessionScore,
    duration: time,
    date: today,
    comment: commentOnScore,
  };
  useEffect(() => {
    if (sendResult) {
      dispatch({
        type: actionTypes.SEND_QUIZ_RESULT,
        payload: performanceInfo,
      });
    }
  }, [sendResult, dispatch]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full bg-green-300"
      >
        <div className="w-full h-5/6 flex justify-center items-center">
          <div className="w-5/6 h-4/6 bg-green-200 rounded p-4 md:pl-10 flex justify-center items-start ">
            <p className="mt-12 text-sm ssm:text-lg lg:text-xl text-green-500">
              You scored {correctAnswers} out of {data.length}
              <strong> ({score}%)</strong> in the{" "}
              <strong>
                {quizInfo.examName}-{quizInfo.examType}-{quizInfo.examYear}
              </strong>{" "}
              quiz,You finished the quiz in <strong>{formatTime(time)}</strong>
            </p>{" "}
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-center items-center gap-5">
          <button
            onClick={() => setQuizStart(false)}
            className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100 rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none"
          >
            Quiz
          </button>
          <button
            className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100 rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none"
            onClick={onRetry}
          >
            Retry
          </button>
          <button
            onClick={onAnswersCheck}
            className="bg-green-700 px-4 ssm:px-8 py-1 text-green-100  rounded md:rounded-md text-sm  text-md ssm:text-lg outline-none"
          >
            See Answers
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default End;
