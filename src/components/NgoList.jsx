import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

class NgoList extends Component {
  constructor() {
    super();
    this.state = { listOfNgos: [] };
  }

  getAllNgos = () => {
    axios
      .get(`https://applica.mybluemix.net/organizaciones`)
      .then(responseFromApi => {
        this.setState({
          listOfNgos: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllNgos();
  }

  render() {
    return (
      <div>
        <h1 className="veryImpo">Organizaciones</h1>
        <div class="row">
          {this.state.listOfNgos.map((ngo, index) => {
            return (
              <div key={ngo._id} className="d-flex justify-content-center">
                <Col xs="12" sm="4">
                  <Card style={{ width: "20rem", float: "center" }}>
                    <Card.Body>
                      <Card.Title className="veryImpo">
                        {ngo.ngoName}
                      </Card.Title>
                      <Card.Text>{ngo.description}</Card.Text>
                      <Link to={`/organizaciones/${ngo._id}`} className="impo">
                        Detalles de ONG
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

export default NgoList;
