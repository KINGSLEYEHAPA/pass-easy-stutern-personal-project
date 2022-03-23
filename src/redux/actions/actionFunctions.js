import actionTypes from "./actionTypes";
import axios from "axios";

export const fetchDataStart = () => ({
  type: actionTypes.FETCH_DATA_START,
});
export const fetchRandomWordStart = () => ({
  type: actionTypes.GET_RANDOM_WORD_MEANING_START,
});
export const fetchRandomWordSuccess = (data) => ({
  type: actionTypes.GET_RANDOM_WORD_MEANING_SUCCESS,
  payload: data,
});
export const fetchRandomWordError = (error) => ({
  type: actionTypes.GET_RANDOM_WORD_MEANING_ERROR,
  payload: error,
});
export const fetchWordStart = () => ({
  type: actionTypes.GET_SEARCH_WORD_START,
});
export const fetchWordSuccess = (data) => ({
  type: actionTypes.GET_SEARCH_WORD_SUCCESS,
  payload: data,
});
export const fetchWordError = (error) => ({
  type: actionTypes.GET_SEARCH_WORD_ERROR,
  payload: error,
});

var randomWords = require("random-words");

export const getMeaningOfRandomWord = async (dispatch) => {
  try {
    dispatch(fetchRandomWordStart());

    const randomWordMeaning = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWords()}`
    );

    console.log(randomWordMeaning?.data[0]);
    dispatch(fetchRandomWordSuccess(randomWordMeaning?.data[0]));
  } catch (err) {
    dispatch(fetchRandomWordError(err.message));
  }
};
