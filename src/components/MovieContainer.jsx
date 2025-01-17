import React from "react";

const MovieContainer = ({ title, year, rating, duration, poster }) => {
  return (
    <div style={styles.card}>
      <img src={poster} alt={title} style={styles.poster} />
      <h3>{title}</h3>
      <p>
        <strong>Yıl:</strong> {year}
      </p>
      <p>
        <strong>Puan:</strong> {rating}
      </p>
      <p>
        <strong>Süre:</strong> {duration}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "black",
    maxWidth: "250px",
  },
  poster: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
};

export default MovieContainer;
