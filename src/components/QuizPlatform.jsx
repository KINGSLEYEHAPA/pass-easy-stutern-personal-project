import React, { useEffect, useState } from "react";
import { MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import QuizModal from "./QuizModal";
import axios from "axios";

const QuizPlatform = () => {
  const [showSubjectBox, setShowSubjectBox] = useState(false);
  const [showSubjectBoxContent, setShowSubjectBoxContent] = useState(true);
  const [quizStart, setQuizStart] = useState(false);
  const [listedSubjects, setListedSubjects] = useState([]);
  const [listedYears, setListedYears] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedExamType, setSelectedExamType] = useState("");
  const [startCall, setStartCall] = useState(false);
  const [queryError, setQueryError] = useState(false);

  const searchedSubject = useSelector(
    (state) => state.question.userSearchedSubject
  );
  const quizInfo = {
    examName: selectedSubject,
    examType: selectedExamType,
    examYear: selectedYear,
  };
  const examOptions = ["WASSCE", "UTME", "POST-UTME"];

  const indexOfSubject = Object.values(listedSubjects)?.findIndex((subject) => {
    return searchedSubject.toLowerCase() === subject.toLowerCase();
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchedSubject !== "") {
      setShowSubjectBox(true);
    }
    if (searchedSubject !== "" && indexOfSubject === -1) {
      setShowSubjectBoxContent(false);
    } else {
      setShowSubjectBoxContent(true);
    }

    setTimeout(() => {
      setShowSubjectBox(false);
    }, 3000);
    // dispatch({ type: actionTypes.SEARCHED_SUBJECT, payload: "" });
  }, [searchedSubject]);
  useEffect(() => {
    const getAllSupportedSubjects = async () => {
      try {
        const subjectResponse = await axios.get(
          " https://questions.aloc.com.ng/api/metrics/list-subjects"
        );
        console.log(subjectResponse);
        setListedSubjects(subjectResponse?.data?.data);
      } catch (err) {}
    };

    const getSupportedYearsForSubject = async () => {
      try {
        const yearResponse = await axios.get(
          `https://questions.aloc.com.ng/api/metrics/years-available-for/${selectedSubject}`
        );
        console.log(yearResponse);
        setListedYears(yearResponse?.data?.data);
        console.log(listedYears);
      } catch (err) {}
    };

    getAllSupportedSubjects();

    selectedSubject !== "" && getSupportedYearsForSubject();
  }, [selectedSubject]);

  useEffect(() => {
    const quizUrl = `https://questions.aloc.com.ng/api/v2/m?subject=${selectedSubject}&year=${selectedYear}&type=${selectedExamType}`;
    const quizOptions = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        AccessToken: "ALOC-801ca18de1a99d035944",
      },
    };
    const getQuiz = async () => {
      dispatch({ type: actionTypes.GET_QUESTION_QUIZ_START });
      try {
        const quizResponse = await axios.get(quizUrl, quizOptions);
        console.log(quizResponse);
        dispatch({
          type: actionTypes.GET_QUESTION_QUIZ_SUCCESS,
          payload: quizResponse,
        });
      } catch (err) {
        dispatch({
          type: actionTypes.GET_QUESTION_QUIZ_ERROR,
          payload: err.message,
        });
      }
    };

    startCall && getQuiz();
  }, [startCall]);

  const startQuiz = () => {
    if (selectedExamType !== "" && selectedYear !== "" && selectedYear !== "") {
      setStartCall(true);
      setQuizStart(true);
    } else {
      setQueryError(true);
      setTimeout(() => {
        setQueryError(false);
      }, 3000);
    }
  };
  return (
    <div className="mt-52 lg:mt-[8.5rem] bg-green-100 min-h-[30rem] w-full p-4 relative">
      <div className="bg-green-300 h-full w-full rounded-xl p-2 flex flex-col gap-1">
        {" "}
        <div className="h-16  md:w-full bg-green-700 flex justify-between items-center px-2">
          <div className="flex gap-2">
            <span className="text-green-100 text-xl mt-2">
              <MdQuiz />
            </span>
            <h1 className="text-green-100 text-xl ssm:text-2xl">Quiz</h1>
          </div>
        </div>
        <div className="w-full h-64 bg-green-500 flex flex-col gap-1 ">
          <div className=" w-full h-2/3 ssm:h-1/3 flex flex-col ssm:flex-row gap-3 ssm:gap-2 p-6  ssm:justify-between items-center border-b-2 border-green-700 px-24">
            <select
              className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer"
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option className="capitalize ">Select a Subject</option>
              {Object.values(listedSubjects)?.map((item, i) => {
                return (
                  <option
                    key={i}
                    value={item}
                    selected={i === indexOfSubject ? true : ""}
                    className="capitalize"
                  >
                    {item.toUpperCase()}
                  </option>
                );
              })}
            </select>
            <select
              className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer"
              onChange={(e) => setSelectedExamType(e.target.value)}
            >
              <option className="capitalize">Exam Type</option>
              {examOptions.map((item, i) => {
                return (
                  <option value={item} key={i} className="capitalize">
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              className="w-56 h-7 bg-green-300 text-white outline-none px-2 text-md rounded cursor-pointer"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option className="capitalize">Select Year</option>
              {listedYears?.map((item, i) => {
                return (
                  <option key={i} value={item.examyear} className="capitalize">
                    {item.examyear}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="bg-green-500 w-full h-1/5 ssm:h-1/3 flex justify-center items-center">
            <button
              onClick={startQuiz}
              className="bg-green-700 px-12 ssm:px-16 py-3 text-green-100 font-bold rounded-md text-md ssm:text-xl outline-none"
            >
              Start Quiz
            </button>
          </div>
          <div className="bg-green-100 w-full h-1/5 ssm:h-1/3 flex justify-center items-center">
            <h2 className="text-green-500 text-2xl ssm:text-4xl">
              Take a Quiz....
            </h2>
          </div>
        </div>
      </div>
      {showSubjectBox && (
        <div className="absolute top-[30%] left-[40%] w-72 h-40 bg-green-700 z-20 shadow-xl rounded-md p-2 flex justify-center items-center">
          <div className="flex justify-center items-center ">
            {showSubjectBoxContent && (
              <p className="text-md text-green-100 font-bold">
                Please Select Year and Exam Type.
              </p>
            )}
            {!showSubjectBoxContent && (
              <p className="text-md text-green-100 font-bold">
                Subject does not exist! <br /> Kindly select another Subject.
              </p>
            )}
          </div>
        </div>
      )}
      {quizStart && (
        <QuizModal
          setQuizStart={setQuizStart}
          quizInfo={quizInfo}
          setStartCall={setStartCall}
        />
      )}
      {queryError && (
        <div className="absolute top-[40%] left-[40%] bg-green-700 w-72 h-40 flex justify-center text-green-100 rounded-lg items-center">
          {" "}
          <p> Please Select Quiz Options</p>
        </div>
      )}
    </div>
  );
};

export default QuizPlatform;
