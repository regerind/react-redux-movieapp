import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <MovieList />
    </Provider>
  );
};

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
