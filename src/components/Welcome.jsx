import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <h1 id="welcomeH1">¡Bienvenido {this.props.name}!</h1>
          <h2>Encuentra el voluntariado que quieres</h2>
          <button className="btn-welcome" to="/auth/signup">
            Comenzar!
          </button>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Welcome;
