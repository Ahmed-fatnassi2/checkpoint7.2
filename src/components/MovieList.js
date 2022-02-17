import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
const MovieList = ({ Series, search, rate }) => {
    const filterMovies = Series.filter(
        (movie) =>
            movie.name.toLowerCase().includes(search.toLowerCase()) &&
            movie.rate >= rate
    );
    return (
        <div className="movie">
            {filterMovies.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />;
            })}
        </div>
    );
};

export default MovieList;
