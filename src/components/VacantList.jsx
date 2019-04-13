import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

class VacantList extends Component {
  constructor() {
    super();
    this.state = { listOfVacants: [] };
  }

  getAllVacants = () => {
    axios.get(`https://applica.mybluemix.net`).then(responseFromApi => {
      this.setState({
        listOfVacants: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllVacants();
  }

  render() {
    return (
      <div>
        <h1 className="veryImpo">Vacantes</h1>
        <div class="row">
          {this.state.listOfVacants.map((vacant, index) => {
            return (
              <div key={vacant._id} className="d-flex justify-content-center">
                <Col xs="12" sm="4">
                  <Card style={{ width: "20rem", float: "center" }}>
                    <Card.Body>
                      <Card.Title className="veryImpo">
                        {vacant.name}
                      </Card.Title>
                      <Card.Text>{vacant.description}</Card.Text>
                      <Link to={`/vacants/${vacant._id}`} className="impo">
                        Revisar Vacante
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

export default VacantList;
