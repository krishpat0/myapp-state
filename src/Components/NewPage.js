/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import bellA from "../Images/bellA.png";
import bellB from "../Images/bellB.png";
class NewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to KVP",
      sub: "Subscribe",
      imageURL: bellA,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "green",
  };
  UpdateBtn = () => {
    this.setState({
      message: "Hit the bell icon to never miss an updates",
      sub: "Subscribed",
    });
  };
  imageChange = () => {
    this.setState({
      imageURL: bellB,
      message: "Thank You Happy Learning",
    });
  };
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.UpdateBtn}>{this.state.sub}</button>
        <p></p>

        <img
          style={{ width: "30px", height: "30px" }}
          src={this.state.imageURL}
          onClick={this.imageChange}
        />
      </div>
    );
  }
}

export default NewPage;
