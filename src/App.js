import React, { Component } from "react";
import "./App.css";
import "./components/RoboCard"
import RoboCard from "./components/RoboCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoboCard 
          img='./logo.svg'
          roboName={'Wassup manjarino!'} 
          roboEmail={'some@email.com'}
        />
        <RoboCard 
          img='./logo.svg'
          roboName={'Shemanicaster'} 
          roboEmail={'some@email.com'}
        />
        <RoboCard 
          img='./logo.svg'
          roboName={'Tipromarinki'} 
          roboEmail={'some@email.com'}
        />
      </div>
    );
  }
}

export default App;
