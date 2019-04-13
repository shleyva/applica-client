import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProject from "./EditProject";

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/projects/${params.id}`)
      .then(responseFromApi => {
        const theProject = responseFromApi.data;
        this.setState(theProject);
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderEditForm = () => {
    if (!this.state.name) {
      this.getSingleProject();
    } else {
      //                                                    {...props} => so we can have 'this.props.history' in Edit.js
      //                                                                                          ^
      //                                                                                          |
      return (
        <EditProject
          theProject={this.state}
          getTheProject={this.getSingleProject}
          {...this.props}
        />
      );
    }
  };

  // DELETE PROJECT:
  deleteProject = id => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:5000/projects/${params.id}`)
      .then(responseFromApi => {
        this.props.history.push("/projects"); // !!!
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deleteProject(this.state._id)}>
          Delete project
        </button>
        <Link to={"/projectList"}>Back to projects</Link>
      </div>
    );
  }
}

export default ProjectDetails;
