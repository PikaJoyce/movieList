import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app.jsx";
import Search from "./components/search.jsx";
import movies from "../src/data/movieData.js";
import add from "../src/components/add.jsx";

ReactDOM.render(
  <App movies={movies} search={Search} add={add} />,
  document.getElementById("app")
);
