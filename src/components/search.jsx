import React from "react";

class Search extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };

    //bind functions here
    this.handleChange = this.handleChange.bind(this);
  }

  //methods
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  // lifecycle

  // render - req
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" onClick={this.props.handleSubmit} />
      </form>
    );
  }
}

export default Search;
