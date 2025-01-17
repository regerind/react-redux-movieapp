import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/film/filmActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          Film Arama
        </a>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Film adını yazın..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            style={{ marginLeft: "auto" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
