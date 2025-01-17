import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/film/filmActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Film Arama</h1>
      <input
        type="text"
        placeholder="Film adını yazın..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        style={styles.input}
      />
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  title: {
    margin: 0,
  },
  input: {
    padding: "5px",
    fontSize: "16px",
  },
};

export default Navbar;
