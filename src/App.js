import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Welcome from "./components/Welcome";
import AddProject from "./components/AddProject";
import Help from "./components/Help";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/projectList" component={ProjectList} />
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/AddProject" component={AddProject} />
          <Route exact path="/Helpwtf" component={Help} />
        </Switch>
      </div>
    );
  }
}

export default App;
