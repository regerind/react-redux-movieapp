import { SET_SEARCH_TERM } from "./filmTypes";
import movies from "../../movies.json";

const initialState = {
  searchTerm: "",
  filmList: movies,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload, // Arama terimini güncelle
      };
    default:
      return state;
  }
};

export default filmReducer;
