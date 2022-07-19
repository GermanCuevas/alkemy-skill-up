import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Resultados = () => {
  const MySwal = withReactContent(Swal);
  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=753cd665514970ab105ea302738633be&language=es-ES&query=${keyword}`;

    axios
      .get(endPoint)
      .then((response) => {
        const movies = response.data.results;

        setMoviesResults(movies);
        movies.length === 0 && MySwal.fire("No hay resultados");
      })
      .catch((error) => console.log(error));
  }, [keyword]); // eslint-disable-line

  return (
    <>
      <h2>
        Tu busqueda:<span> {keyword.toUpperCase()}</span>
      </h2>
      {moviesResults.length === 0 && <h3>No hay resultados</h3>}
      <div className="row container">
        {moviesResults.map((oneMovie, idx) => {
          return (
            <div key={idx} className="col-4 m">
              <div className="card my-4">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`}
                  alt="Es una imagen"
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>

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
    </>
  );
};

export default Resultados;
