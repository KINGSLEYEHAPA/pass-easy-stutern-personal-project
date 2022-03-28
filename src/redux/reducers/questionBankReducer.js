import actionTypes from "../actions/actionTypes";

const questionData = {
  userSearchedSubject: "",
  isLoading: false,
  quizData: [],
  isError: false,
  error: null,
};

const questionBankReducer = (state = questionData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_QUESTION_QUIZ_START:
      return { ...state, isLoading: true };
    case actionTypes.SEARCHED_SUBJECT:
      return { ...state, userSearchedSubject: payload };
    case actionTypes.GET_QUESTION_QUIZ_SUCCESS:
      return { ...state, quizData: payload, isLoading: false };
    case actionTypes.GET_QUESTION_QUIZ_ERROR:
      return { ...state, isError: true, error: payload };
    default:
      return state;
  }
};

export default questionBankReducer;
