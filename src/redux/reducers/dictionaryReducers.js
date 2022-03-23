import actionTypes from "../actions/actionTypes";

const dictionaryData = {
  isLoadingRandom: false,
  randomWord: [],
  isRandomWordError: false,
  randomWordError: null,
  isLoadingWord: false,
  wordDefinition: [],
  isWordError: false,
  wordError: null,
};

const dictionaryReducer = (state = dictionaryData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_RANDOM_WORD_MEANING_START:
      return { ...state, isLoadingRandom: true };
    case actionTypes.GET_RANDOM_WORD_MEANING_SUCCESS:
      return { ...state, randomWord: payload, isLoadingRandom: false };
    case actionTypes.GET_RANDOM_WORD_MEANING_ERROR:
      return {
        ...state,
        isLoadingRandom: false,
        isRandomWordError: true,
        randomWordError: payload,
      };
    case actionTypes.GET_SEARCH_WORD_START:
      return { ...state, isLoadingWord: true };
    case actionTypes.GET_SEARCH_WORD_SUCCESS:
      return { ...state, wordDefinition: payload, isLoadingWord: false };
    case actionTypes.GET_SEARCH_WORD_ERROR:
      return {
        ...state,
        isLoadingWord: false,
        isWordError: true,
        wordError: payload,
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
