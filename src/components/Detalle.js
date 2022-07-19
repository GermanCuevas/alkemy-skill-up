import Redirect from "./Redirect";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Detalle = () => {
  let token = sessionStorage.getItem("token");
  const [movie, setMovie] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=753cd665514970ab105ea302738633be&language=es-ES`;
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        console.log(movieData);
        setMovie(movieData);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [movieID]);

  if (!token) {
    return <Redirect to={"../"} />;
  }

  if (!movie) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <h2>{movie.title}</h2>
        <div className="row">
          <div className="col-4">
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
            />
          </div>

          <div className="col-8">
            <h5>Fecha de estreno:</h5>
            <p>{movie.release_date}</p>
            <h5>Resenia: </h5>
            <p>{movie.overview}</p>
            <h5>Rating: {movie.vote_average} </h5>
            <h5>Generos: </h5>
            <ul>
              {movie.genres.map((oneGenre) => (
                <li key={oneGenre.id}>{oneGenre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default Detalle;
