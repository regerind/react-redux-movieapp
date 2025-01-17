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
    textAlign: "center",
    backgroundColor: "black",
    flex: "1 1 auto",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    height: "auto",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
};

export default MovieContainer;
