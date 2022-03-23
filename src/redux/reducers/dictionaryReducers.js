import actionTypes from "../actions/actionTypes";

const dictionaryData = {
  isLoadingRandom: false,
  randomWord: [],
};

const dictionaryReducer = (state = dictionaryData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_RANDOM_WORD_MEANING_START:
      return { ...state, isLoadingRandom: true };
    case actionTypes.GET_RANDOM_WORD_MEANING_SUCCESS:
      return { ...state, randomWord: payload, isLoadingRandom: false };
    default:
      return state;
  }
};

export default dictionaryReducer;
