// make a class
// import react component
import React from "react";
import MovieList from "./movieList.jsx";
import Search from "./search.jsx";
import Add from "./add.jsx";

// this.props = {
//   movies =[
//     { title: "Mean Girls" },
//     { title: "Hackers" },
//     { title: "The Grey" },
//     { title: "Sunshine" },
//     { title: "Ex Machina" }
//   ]
// }

// make class
// Lowercase c !!!!!
class App extends React.Component {
  // constructor
  // Where state for this component goes
  // As well as where we inhereit props
  // Also best practice to put function binding here
  constructor(props) {
    super(props);
    this.state = {
      watched: [],
      towatch: [],
      movies: props.movies,
      storage: props.movies
    };
    //bind functions here
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  // lifecycle method(s)
  // This is where we put code we want to execute at a specific time in a component's lifecycle
  // being alive/about to die
  // componentwillmount/unmount

  // methods
  // This is where we put functions to manipulate this classes state
  handleSubmit(query) {
    var movies = this.state.movies;

    var filteredArr = movies.filter(movie => {
      var title = movie.title.toLowerCase();
      var item = query.toLowerCase();
      return title.includes(item);
    });

    this.setState({
      movies: filteredArr,
      storage: this.props.movies
    });
  }

  handleAdd(movieName) {
    this.setState({
      movies: [{ title: movieName }]
    });
  }

  // render
  // This is what react will insert into the DOM wherever we place this component
  // This is comprised of primarily of HTML and react components (which themselves contain html)
  render() {
    return (
      <div>
        <Search titles={this.state.value} handleSubmit={this.handleSubmit} />
        <Add handleAdd={this.handleAdd} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
