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
export const fetchNewsStart = () => ({
  type: actionTypes.GET_NEWS_DATA_START,
});
export const fetchNewsSuccess = (data) => ({
  type: actionTypes.GET_NEWS_DATA_SUCCESS,
  payload: data,
});
export const fetchNewsError = (error) => ({
  type: actionTypes.GET_NEWS_DATA_ERROR,
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

const url = "https://api.newscatcherapi.com/v2/search";
var options = {
  params: {
    q: "Nigerian education",
    lang: "en",
    sort_by: "relevancy",
    page: "1",
  },
  headers: {
    "x-api-key": "8UsobjqL9yw3pUvyYViILCdvtL0wjDsuZOpJL0pF",
  },
};
export const getNewsData = async (dispatch) => {
  try {
    dispatch(fetchNewsStart());

    const newsResponse = await axios.get(url, options);

    console.log(newsResponse);
    dispatch(fetchNewsSuccess(newsResponse?.data?.articles));
  } catch (err) {
    console.log(err.message);
    dispatch(fetchNewsError(err.message));
  }
};
