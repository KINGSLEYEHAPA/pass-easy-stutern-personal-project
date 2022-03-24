import actionTypes from "../actions/actionTypes";

const newsData = {
  isLoadingNews: false,
  latestNews: [],
  newsError: null,
  isNewsError: false,
};

const newsReducer = (state = newsData, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_NEWS_DATA_START:
      return {
        ...state,
        isLoadingNews: true,
        isNewsError: false,
        newsError: null,
      };
    case actionTypes.GET_NEWS_DATA_SUCCESS:
      return { ...state, latestNews: payload, isLoadingNews: false };
    case actionTypes.GET_NEWS_DATA_ERROR:
      return {
        ...state,
        isLoadingnNews: false,
        isNewsError: true,
        newsError: payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
