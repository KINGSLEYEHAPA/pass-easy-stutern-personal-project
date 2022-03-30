import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
  cancelQuiz,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const choiceWrapper = useRef(null);
  const changeHandler = (e) => {
    setSelected(e.target.value);

    if (error) {
      setError("");
    }
  };
  useEffect(() => {
    const findCheckedInput =
      choiceWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }

    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data?.question, a: selected },
    ]);

    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  const option = data?.option;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full bg-green-700 rounded-lg"
      >
        <div className="w-full h-0.5/6">
          <div className="w-full h-full flex justify-between items-center border-b-2 border-green-100 py-1 px-4 ">
            <h4 className="text-sm ssm:text-md  text-green-100">
              Question {activeQuestion + 1} of {numberOfQuestions}
            </h4>
            <p className="text-green-100 text-sm ssm:text-md ">
              {data?.examtype}-{data?.examyear}
            </p>
          </div>
        </div>
        <div className="w-full min-h-[6.3rem]  p-4 bg-green-300">
          <p className="text-xs sm:text-sm ssm:text-md text-green-700">
            {data?.section}
          </p>
          <p className="text-xs sm:text-sm ssm:text-md text-green-700">
            <strong>Q:</strong> {data?.question}
          </p>
        </div>
        <div
          className="w-full h-3/6 sm:h-[9.5rem] md:h-[12.25rem] bg-green-200"
          ref={choiceWrapper}
        >
          {data !== null &&
            Object.entries(option).map((choice, i) => {
              return (
                <div
                  className={
                    choice[1].length < 20
                      ? "w-full text-sm p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-6 ssm:h-0.5/5 cursor-pointer"
                      : "w-full text-[9px] p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-6 ssm:h-0.5/5 cursor-pointer"
                  }
                  key={i}
                >
                  <div className="px-2 py-1   ">
                    <input
                      type="radio"
                      value={choice[0]}
                      onChange={changeHandler}
                      name="answer"
                    />
                  </div>
                  <p>{choice[1]}</p>
                </div>
              );
            })}

          {error && (
            <motion.div
              initial={{ opacity: 0.5, translateX: -10 }}
              animate={{
                opacity: 1,
                translateX: [10, -10, 10, -10, 10, -10, 10, -10, 0],
              }}
              transition={{ duration: 1 }}
              className=" w-full md:w-1/2 ml-24 py-1 text-red-500 font-bold"
            >
              {error}
            </motion.div>
          )}
        </div>
        <div className="w-full h-[2.2rem] gap-3 sm:h-[1.8rem] md:h-1/6 bg-green-300 flex justify-center items-center">
          <button
            onClick={nextClickHandler}
            className="bg-green-700 px-3 ssm:px-5 py-0.5 text-green-100  rounded md:rounded-md text-sm ssm:text-md md:text-lg outline-none"
          >
            Next
          </button>
          <button
            onClick={cancelQuiz}
            className="bg-green-700 px-3 ssm:px-5 py-0.5 text-green-100  rounded md:rounded-md text-sm ssm:text-md md:text-lg outline-none"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Question;
