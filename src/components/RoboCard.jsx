import React, { Component } from "react";
import "tachyons"
export default class HelloWorld extends Component {
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${this.props.roboName}?200x200`} alt='Robo Img'/>
        <h1>{this.props.roboName}</h1>
        <p>{this.props.roboEmail}</p>
      </div>
    );
  }
}

