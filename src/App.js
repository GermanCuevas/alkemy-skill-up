//Libraries
import { Routes, Route } from "react-router-dom";
//hooks
import { useState, useEffect } from "react";
//Components
import Login from "./components/Login";
import Detalle from "./components/Detalle.js";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
//Styles
import "./css/bootstrap.min.css";
import "./css/app.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favsLocal = JSON.parse(localStorage.getItem("favs"));
    if (favsLocal) {
      setFavorites(favsLocal);
    }
  }, []);

  const addOrRemovefromFavourites = (e) => {
    const tempMoviesInFavs = JSON.parse(localStorage.getItem("favs")) ?? [];

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").src;
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };

    let movieIsInArray = tempMoviesInFavs.find(
      (oneMovie) => oneMovie.id === movieData.id
    );
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      setFavorites(tempMoviesInFavs);
    } else {
      let moviesLeft = tempMoviesInFavs.filter(
        (oneMovie) => oneMovie.id !== movieData.id
      );
      setFavorites(moviesLeft);

      localStorage.setItem("favs", JSON.stringify(moviesLeft));
    }
  };

  return (
    <>
      <div className="container-m3">
        <Header favorites={favorites} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/listado"
            element={
              <Listado addOrRemovefromFavourites={addOrRemovefromFavourites} />
            }
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                favorites={favorites}
                addOrRemovefromFavourites={addOrRemovefromFavourites}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
