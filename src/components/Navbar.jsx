import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/LogoBgless.jpeg";

const navbar = () => {
  return (
    <Navbar className="navbar bg-white">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="180"
          height="50"
          className="d-inline-block align-right"
        />
        {""}
      </Navbar.Brand>
      <div>
        <a href="/projectList" className="ml-1 impo">
          Proyectos
        </a>
        <a href="/AddProject" className="ml-1 impo">
          Añadir Proyecto
        </a>
        <a href="/projectList" className="ml-1 impo">
          Vacantes
        </a>
      </div>
    </Navbar>
  );
};

export default navbar;
