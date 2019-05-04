import React from "react";
import Movie from "./movie.jsx";

// Dynamically render from an array using map function
// Our map function will return a jsx fragment
// When you import a file it will be assigned to whatever
var MovieList = props => {
  return (
    <div>
      {props.movies.map((movie, key) => (
        <Movie movie={movie.title} key={key} />
      ))}
    </div>
  );
};

// when you import a file it will be assigned to whatever you want
export default MovieList;

// movie?
// [{title: name}]
// movie = {title: name}
// props = {
//  movie: name,
//}
