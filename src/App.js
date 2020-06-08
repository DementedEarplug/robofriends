import React, { Component } from "react";
import "./App.css";
import "./components/RoboCard"
import CardList from "./components/CardList";
import {robots} from "./data/robots"

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
