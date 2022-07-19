import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Redirect from "./Redirect";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const Listado = (props) => {
  const MySwal = withReactContent(Swal);
  let token = sessionStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=753cd665514970ab105ea302738633be&language=es-ES&page=1";
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;

        setMoviesList(apiData.results);
      })
      .catch((error) => {
        MySwal.fire(
          `<h2>Hubo errores, intenta mas tarde:</h2> <p>*  ${error.message}</p>`
        );
        console.warn(error);
      });
  }, [setMoviesList]); // eslint-disable-line

  if (!token) {
    return <Redirect to={"../"} />;
  }

  return (
    <div className="container row">
      {moviesList.map((oneMovie, idx) => {
        return (
          <div key={idx} className="col-3 m">
            <div className="card my-4">
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                alt="Es una imagen"
              />
              <button
                className="favourite-btn"
                onClick={props.addOrRemovefromFavourites}
                data-movie-id={oneMovie.id}
              >
                🖤
              </button>
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                <p className="card-text">
                  {oneMovie.overview.substring(0, 120)}...
                </p>
                <Link
                  to={`/detalle?movieID=${oneMovie.id}`}
                  className="btn btn-primary"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listado;
