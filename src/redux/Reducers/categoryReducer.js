// filtersReducer.js
import { GET_CATEGORIES, POST_CATEGORY } from "../Actions/actionTypes";

const initialState = {
  allCategories: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case POST_CATEGORY:
      return {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      };
    default:
      return state;
  }
};

export default categoryReducer;
