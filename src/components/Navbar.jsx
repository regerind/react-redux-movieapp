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
    fontSize: "25px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "600px",
    marginLeft: "auto",
    display: "block",
  },
};

export default Navbar;
