import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import backgroundImg from "../../assets/plain-dark-blue.jpg";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <img src={backgroundImg} className="bg" />
      <h1 className="content">hello</h1>
      <section className="movies content">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-wrapper">
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
