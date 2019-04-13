import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Help extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1 id="welcomeH1">AYUDA?! {this.props.name}!</h1>
        </Jumbotron>{" "}
      </React.Fragment>
    );
  }
}

export default Help;
