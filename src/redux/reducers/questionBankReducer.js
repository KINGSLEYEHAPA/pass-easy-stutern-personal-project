import actionTypes from "../actions/actionTypes";

const questionData = {
  userSearchedSubject: "",
  isLoading: false,
};

const questionBankReducer = (state = questionData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };
    case actionTypes.SEARCHED_SUBJECT:
      return { ...state, userSearchedSubject: payload };
    default:
      return state;
  }
};

export default questionBankReducer;
