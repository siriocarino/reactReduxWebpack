import {
  ADD_ARTICLE,
  REMOVE_ARTICLE
} from "../constants/action-types";

const initialState = {
  articles: []
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state,
        articles: [...state.articles, action.payload]
      };
    case REMOVE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(item => action.payload !== item)
      }
    default:
      return state;
  }
};

export default articleReducer