import React, { useState, useEffect, useRef } from "react";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
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
      { q: data.question, a: selected },
    ]);

    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  console.log(selected);

  return (
    <div className="w-full h-full bg-green-700 rounded-lg">
      <div className="w-full h-1/6">
        <div className="w-full h-full flex justify-center items-center border-b-2 border-green-100">
          <h4 className="text-sm sm:text-lg lg:text-2xl text-green-100">
            Question {activeQuestion + 1} of {numberOfQuestions}
          </h4>
        </div>
      </div>
      <div className="w-full h-1/6  p-4 bg-green-300">
        <p className="text-sm sm:text-md ssm:text-xl text-green-700">
          <strong>Q:</strong> {data.question}
        </p>
      </div>
      <div className="w-full h-3/6 bg-green-200" ref={choiceWrapper}>
        {data.choices.map((choice, i) => {
          return (
            <div
              className="w-full p-4 flex justify-start items-center gap-2 hover:bg-gray-200 h-1/5 cursor-pointer"
              key={i}
            >
              <div className="px-3 py-1  ">
                <input type="radio" value={choice} onChange={changeHandler} />
              </div>
              <p>{choice}</p>
            </div>
          );
        })}
        {error && (
          <div className=" w-full md:w-1/2 ml-24 py-1 text-gray-500">
            {error}
          </div>
        )}
      </div>
      <div className="w-full h-1/6 bg-green-300 flex justify-center items-center">
        <button
          onClick={nextClickHandler}
          className="bg-green-700 px-6 ssm:px-8 py-1 text-green-100  rounded md:rounded-md text-md ssm:text-xl outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
