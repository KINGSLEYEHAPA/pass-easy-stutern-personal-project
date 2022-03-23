import actionTypes from "../actions/actionTypes";

const questionData = {
  isLoading: false,
};

const questionBankReducer = (state = questionData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default questionBankReducer;
