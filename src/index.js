import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app.jsx";
import Search from "./components/search.jsx";
import movies from "../src/data/movieData.js";

ReactDOM.render(
  <App movies={movies} search={Search} />,
  document.getElementById("app")
);
