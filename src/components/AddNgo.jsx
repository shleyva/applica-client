import React, { Component } from "react";
import axios from "axios";

class AddNgo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngoName: "",
      description: "",
      location: "",
      since: "",
      activities: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const ngoName = this.state.ngoName;
    const description = this.state.description;
    const location = this.state.location;
    const since = this.state.since;
    const activities = this.state.activities;

    axios
      .post("https://applica.mybluemix.net/organizaciones/add", {
        ngoName,
        description,
        location,
        since,
        activities
      })
      .then(() => {
        this.props.getData();
        this.setState({
          ngoName: "",
          description: "",
          location: "",
          since: "",
          activies: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { ngoName, value } = event.target; //** Revisar aquí que pedo con el NAME!*/
    this.setState({ [ngoName]: value });
  };

  alertaExito() {
    alert("Organización registrada con éxito");
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleFormSubmit}>
          <label className="formLabel">Nombre de la Organización</label>
          <input
            type="text"
            name="name"
            value={this.state.ngoName}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">Sede: (Ciudad o Población)</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">Descripción:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">Actividades Principales:</label>
          <textarea
            name="activities"
            value={this.state.activities}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">Año de fundación</label>
          <input
            type="number"
            name="since"
            value={this.state.since}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />

          <input
            type="submit"
            value="Registrar"
            className="btn-primary"
            onClick={this.alertaExito}
          />
        </form>
      </div>
    );
  }
}

export default AddNgo;
