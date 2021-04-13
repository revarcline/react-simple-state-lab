import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Cell extends Component {
  constructor(props) {
    super();
    this.state = { color: props.value };
  }

  handleClick = () => {
    this.setState({ color: "#333" });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.string,
};
