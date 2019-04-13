import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, CardColumns } from "react-bootstrap";

import AddProject from "./AddProject";

class ProjectList extends Component {
  constructor() {
    super();
    this.state = { listOfProjects: [] };
  }

  getAllProjects = () => {
    axios.get(`http://localhost:5000/projectList`).then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfProjects.map((project, index) => {
            return (
              <div key={project._id} className="d-flex justify-content-center">
                <CardColumns>
                  <Card style={{ width: "20rem", float: "center" }}>
                    <Card.Img variant="top" src={project.pic} />
                    <Card.Body>
                      <Card.Title className="veryImpo">
                        {project.name}
                      </Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <Link to={`/projects/${project._id}`} className="impo">
                        Ver más
                      </Link>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
