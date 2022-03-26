import React, { useState, useEffect } from "react";
import End from "./End";
import PerformanceSheet from "./PerformanceSheet";
import Question from "./Question";
import Start from "./Start";
let interval;

const QuizModal = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showPerformanceSheet, setShowPerformanceSheet] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <div className="absolute top-0 left-0 z-30 w-full h-full bg-green-500/70">
      <div className="w-full h-1/6 bg-green-700 flex items-center justify-start">
        <h2 className="px-4 text-green-100 text-xl">Chemistry Quiz-Live</h2>
      </div>
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="w-80 h-80 sm:w-[30rem] sm:h-80 ssm:[34rem] md:w-[40rem] md:h-[25rem] mt-10 bg-green-100 rounded-lg p-1 shadow-xl">
          {true && <Question />}
          {false && <End />}
          {false && <PerformanceSheet />}
          {false && <Start />}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
