import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

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
        <h1 className="veryImpo">Proyectos</h1>
        <div class="row">
          {this.state.listOfProjects.map((project, index) => {
            return (
              <div key={project._id} className="d-flex justify-content-center">
                <Col xs="12" sm="4">
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
                </Col>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
