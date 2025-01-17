import React from "react";

const MovieContainer = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="card mb-2" key={movie.Title}>
          <div
            className="card flex-fill"
            style={{
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">
                <strong>Yıl:</strong> {movie.Year}
              </p>
              <p className="card-text">
                <strong>Puan:</strong> {movie.Rating}
              </p>
              <p className="card-text">
                <strong>Süre:</strong> {movie.Duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieContainer;
