import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Redirect from "./Redirect";

const Buscador = () => {
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (keyword.length === 0) {
      MySwal.fire("Debes ingresar una busqueda");
    } else if (keyword.length < 4) {
      MySwal.fire("Deben ser mas de 4 caracteres");
    } else {
      e.target.reset();

      navigate(`/resultados?keyword=${keyword}`);
    }
  };

  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center">
      <label className="form-label mb-0 mx-2">
        <input
          type="text"
          className="form-control"
          name="keyword"
          placeholder="Buscador..."
        />
      </label>

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Buscador;
