import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import FilmContainer from "./components/FilmContainer";

const App = () => {
  return (
    <Provider store={store}>
      <FilmContainer />
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
