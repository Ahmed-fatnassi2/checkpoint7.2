import React from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
const MovieCard = ({ movie }) => {
    return (
        <div>
            <img src={movie.posterUrl} alt="movie.jpg" width={150} />
            <h3 style={{ color: "white" }}>{movie.name}</h3>
            <h3 style={{ color: "grey" }}>{movie.description}</h3>
            <StarRatingComponent
                name="rate3"
                editing={false}
                starCount={10}
                value={movie.rate}
            />
        </div>
    );
};

export default MovieCard;
