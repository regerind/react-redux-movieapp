import { SET_SEARCH_TERM } from "./filmTypes";

export const setSearchTerm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    payload: term, // Arama terimi
  };
};
