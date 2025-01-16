import { createStore } from "redux";
import filmReducer from "./film/filmReducer";

const store = createStore(filmReducer);

export default store;
