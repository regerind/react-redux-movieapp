import { SET_SEARCH_TERM } from "./filmTypes";

const initialState = {
  searchTerm: "",
  filmList: [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Fight Club",
    "Pulp Fiction",
    "The Matrix",
    "Forrest Gump",
  ],
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
