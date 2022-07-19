const Favoritos = (props) => {
  if (props.favorites.length === 0) {
    return (
      <div className="container row">
        <h2>No hay nada en favoritos</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Seccion de favoritos</h2>
      <div className="container row">
        {props.favorites.map((oneMovie, idx) => {
          return (
            <div key={idx} className="col-3 m">
              <div className="card my-4">
                <img
                  className="card-img-top"
                  src={oneMovie.imgURL}
                  alt="Es una imagen"
                />
                <button
                  className="favourite-btn"
                  onClick={props.addOrRemovefromFavourites}
                  data-movie-id={oneMovie.id}
                >
                  ❌
                </button>
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 120)}...
                  </p>
                  {/* <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    Detail
                  </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favoritos;
