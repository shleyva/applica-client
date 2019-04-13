import React, { Component } from "react";
import axios from "axios";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      location: "",
      start: "",
      end: "",
      pic: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const start = this.state.start;
    const end = this.state.end;
    const pic = this.state.pic;
    axios
      .post("http://localhost:5000/project/add", {
        name,
        description,
        location,
        start,
        end,
        pic
      })
      .then(() => {
        this.props.getData();
        this.setState({
          name: "",
          description: "",
          location: "",
          start: "",
          end: "",
          pic: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target; //** Revisar aquí que pedo con el NAME!*/
    this.setState({ [name]: value });
  };

  alertaExito() {
    alert("Proyecto guardado exitosamente! Regresamos al listado de proyectos");
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleFormSubmit}>
          <label className="formLabel">Nombre del Proyecto</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
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
          <label className="formLabel">Fecha de Inicio</label>
          <input
            type="date"
            name="start"
            value={this.state.start}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">Fecha de Cierre</label>
          <input
            type="date"
            name="end"
            value={this.state.end}
            onChange={e => this.handleChange(e)}
            className="form-control"
          />
          <label className="formLabel">URL de Fotografía</label>
          <input
            type="URL"
            name="pic"
            value={this.state.pic}
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

export default AddProject;
