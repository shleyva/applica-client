import React, { Component } from "react";
import axios from "axios";

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.theProject.name,
      description: this.props.theProject.description
    };
  }

  handleFormSubmit = event => {
    const name = this.state.name;
    const description = this.state.description;

    event.preventDefault();

    axios
      .put(
        `https://applica.mybluemix.net/projects/${this.props.theProject._id}`,
        {
          name,
          description
        }
      )
      .then(() => {
        this.props.getTheProject();
        // after submitting the form, redirect to '/projects'
        this.props.history.push("/projects");
      })
      .catch(error => console.log(error));
  };

  handleChangeTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangeDesc = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChangeTitle(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChangeDesc(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditProject;
