import { SET_SEARCH_TERM } from "./filmTypes";

const initialState = {
  searchTerm: "",
  filmList: [
    {
      Id: "769",
      Title: "GoodFellas",
      Year: "1990",
      Rating: "8.7",
      Duration: "146 min",
      Poster:
        "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    },
    {
      Id: "120",
      Title: "The Lord of the Rings",
      Year: "2001",
      Rating: "8.7",
      Duration: "178 min",
      Poster:
        "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      Id: "27205",
      Title: "Inception",
      Year: "2010",
      Rating: "8.7",
      Duration: "148 min",
      Poster:
        "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    },
    {
      Id: "105",
      Title: "Back to the Future",
      Year: "1985",
      Rating: "8.7",
      Duration: "116 min",
      Poster:
        "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    },
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
