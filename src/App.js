import React, { Component } from "react";
import "./App.css";
import "./components/RoboCard";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import axios from "axios";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: "",
    };
  }

  // Equivalent to vue's mounted()
  async componentDidMount() {
    const fetchedRobots = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(fetchedRobots.data);
    this.setState({ robots: fetchedRobots.data });
  }

  // Use arrow functions to prevent an error with the this. keyword using
  // the local prop scope instead of the parent scope.
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { robots, search } = this.state;
    // Pass this array ass a prop to see the filtering take place.
    const filteredRobots = robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });

    return robots.length ? (
      <div className="App">
        <Header searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    ) : (
      <div className="App">
        <Header searchChange={this.onSearchChange} />
        <h1 className="pv7">Loading...</h1>
      </div>
    );
  }
}

export default App;
