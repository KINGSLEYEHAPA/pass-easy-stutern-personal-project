import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import End from "./End";
import PerformanceSheet from "./PerformanceSheet";
import Question from "./Question";
import Start from "./Start";
import { quizData } from "../dummyData";
let interval;

const QuizModal = ({ setQuizStart, quizInfo }) => {
  const [sendResult, setSendResult] = useState(false);
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showPerformanceSheet, setShowPerformanceSheet] = useState(false);
  const [time, setTime] = useState(0);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
      setSendResult(true);
    }
  }, [step]);

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    setSendResult(false);
    setShowPerformanceSheet(false);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="absolute top-0 left-0 z-30 w-full h-full bg-green-500/70">
      <div className="w-full h-1/6 bg-green-700 flex items-center justify-start">
        <h2 className="px-4 text-green-100 text-xl">
          {quizInfo.examName} Quiz-Live
        </h2>
      </div>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-80 h-80 sm:w-[30rem] sm:h-80 ssm:[34rem] md:w-[40rem] md:h-[25rem] mt-10 bg-green-100 rounded-lg p-1 shadow-xl flex justify-center items-center">
          {step === 2 && (
            <Question
              data={quizData.data[activeQuestion]}
              onAnswerUpdate={setAnswers}
              numberOfQuestions={quizData.data.length}
              activeQuestion={activeQuestion}
              onSetActiveQuestion={setActiveQuestion}
              onSetStep={setStep}
            />
          )}
          {step === 3 && (
            <End
              results={answers}
              data={quizData.data}
              onAnswersCheck={() => setShowPerformanceSheet(true)}
              time={time}
              onRetry={resetClickHandler}
              setQuizStart={setQuizStart}
              quizInfo={quizInfo}
              sendResult={sendResult}
            />
          )}
          <AnimatePresence>
            {showPerformanceSheet && (
              <PerformanceSheet
                onClose={() => setShowPerformanceSheet(false)}
                results={answers}
                data={quizData.data}
                time={time}
                quizInfo={quizInfo}
              />
            )}
          </AnimatePresence>
          {step === 1 && <Start onQuizStartHandler={quizStartHandler} />}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
