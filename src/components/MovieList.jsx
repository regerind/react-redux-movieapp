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
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
              {filteredFilms.length > 0 ? (
                filteredFilms.map((film) => (
                  <MovieContainer key={film.Id} movies={[film]} />
                ))
              ) : (
                <p>Aramanıza uygun film bulunamadı.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
