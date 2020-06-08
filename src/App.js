import React, { Component } from "react";
import "./App.css";
import "./components/RoboCard"
import HelloWorld from "./components/RoboCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld greeting={'Wassup manjarino!'} />
      </div>
    );
  }
}

export default App;
