import actionTypes from "../actions/actionTypes";

const performanceData = {
  quizResults: [],
  correctAnswersPerSession: [],
  scorePerSession: [],
};

const performanceReducer = (state = performanceData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CORRECT_ANSWERS:
      return { ...state, correctAnswersPerSession: payload };
    case actionTypes.SEND_SCORE:
      return {
        ...state,
        scorePerSession: payload,
      };
    default:
      return state;
  }
};

export default performanceReducer;
