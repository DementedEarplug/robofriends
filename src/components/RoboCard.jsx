import React, { Component } from "react";
import '../style/RoboCard.css'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello Worl my mein!!</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}


