import React from "react";
import { NavLink } from "react-router-dom";
import Buscador from "./Buscador";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/"}>
        Inicio
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active"></li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/listado"}>
              Listado
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/favoritos"}>
              Favoritos
            </NavLink>
          </li>
          <li className="nav-item  d-flex align-items-center">
            <span className="text-success">
              {props.favorites.length > 0 && (
                <>Peliculas en Favoritos: {props.favorites.length}</>
              )}
            </span>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link disabled" to={"#"}>
              Disabled
            </NavLink>
          </li> */}
        </ul>
      </div>
      <Buscador />
    </nav>
  );
};

export default Header;
