import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionTypes from "../redux/actions/actionTypes";

const Search = () => {
  const [searchedSubject, setSearchedSubject] = useState("");
  const handleSearchedSubjects = (e) => {
    setSearchedSubject(e.target.value);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subjectForQuiz = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SEARCHED_SUBJECT, payload: searchedSubject });
    setSearchedSubject("");
    navigate("/quiz");
  };
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <form onSubmit={subjectForQuiz} className="w-full h-full">
        <input
          value={searchedSubject}
          onChange={handleSearchedSubjects}
          className="w-full h-full outline-none px-3  text-xl bg-gray-100 text-green-700 placeholder:text-green-300  "
          type="text"
          placeholder="Practice a subject?"
          required
        />
      </form>
      <span
        onClick={subjectForQuiz}
        className="bg-green-500 h-full w-16 flex justify-center items-center text-white text-3xl"
      >
        <BiSearchAlt2 />
      </span>
    </div>
  );
};

export default Search;
