import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // Kind of like a try catch life scycle
  componentDidCatch() {
    this.setState({hasError:true})
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Opps, something went wrong!</h1>
        </div>
      );
    }
    return this.props.children;
  }
}
