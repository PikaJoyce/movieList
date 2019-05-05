import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  add(event) {
    event.preventDefault();
    this.props.handleAdd(this.state.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" onClick={this.add} />
      </form>
    );
  }
}

export default Add;
