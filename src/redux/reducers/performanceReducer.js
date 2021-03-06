import actionTypes from "../actions/actionTypes";

const performanceData = {
  quizResults: [],
  correctAnswersPerSession: [],
};

const performanceReducer = (state = performanceData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CORRECT_ANSWERS:
      return { ...state, correctAnswersPerSession: payload };
    case actionTypes.SEND_QUIZ_RESULT:
      return { ...state, quizResults: [...state.quizResults, payload] };

    default:
      return state;
  }
};

export default performanceReducer;
