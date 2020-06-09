import React, { Component } from "react";
import "./App.css";
import "./components/RoboCard";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { robots } from "./data/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      search: "",
    };
  }

  //Use arrow functions to prevent an error with the this. keyword using
  // the local prop scope instead of the parent scope.
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    // Pass this array ass a prop to see the filtering take place.
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <Header searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
