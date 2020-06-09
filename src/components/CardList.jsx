import React, { Component, Fragment } from "react";
import RoboCard from "./RoboCard";

export default class CardList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.robots.map((robot) => {
          return (
            <RoboCard
              key={robot.id}
              roboName={robot.name}
              roboEmail={robot.email}
            />
          );
        })}
      </Fragment>
    );
  }
}
