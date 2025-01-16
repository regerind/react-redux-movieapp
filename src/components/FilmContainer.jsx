import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/film/filmActions";

const FilmContainer = () => {
  const dispatch = useDispatch();

  // Redux state'lerini al
  const searchTerm = useSelector((state) => state.searchTerm);
  const filmList = useSelector((state) => state.filmList);

  // Arama terimine göre filtreleme yap
  const filteredFilms = filmList.filter((film) =>
    film.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Film Arama</h1>
      <input
        type="text"
        placeholder="Film adını yazın..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <ul>
        {filteredFilms.map((film, index) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmContainer;
