import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";

const MovieList = () => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const filmList = useSelector((state) => state.filmList);

  // Filtrelenmiş film listesi
  const filteredFilms = filmList.filter((film) =>
    film.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.list}>
      {filteredFilms.length > 0 ? (
        filteredFilms.map((film, index) => (
          <MovieContainer
            key={index}
            title={film.Title}
            year={film.Year}
            rating={film.Rating}
            duration={film.Duration}
            poster={film.Poster}
          />
        ))
      ) : (
        <p>Aramanıza uygun film bulunamadı.</p>
      )}
    </div>
  );
};

const styles = {
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};

export default MovieList;
