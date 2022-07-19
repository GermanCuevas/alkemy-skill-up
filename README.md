# alkemy-skill-up
Aplicacion hecha con React.

Aplicacion de peliculas.

Se usa la Api https://developers.themoviedb.org/3 El trabajo esta basado en el Skill up de alkemy.org.

Componentes:

Header , es la barra de navegacion.

Login , es el formulario de ingreso. Las credenciales son :

mail : challenge@alkemy.org pass: react

Sin las credenciales correctas no sera posible ingresar. Se usa Axios hacia http://challenge-react.alkemy.org para solicitar token de ingreso. Una vez que se ingresa, la sesion permanecera validada por dicho token que se guarda en sesionstorage.

Listado, es donde se cargan todas las cards de las peliculas. Cada pelicula tiene un boton de favoritos. Esta parte se maneja con un localstorage.

Detalle, obtiene de la Api los detalles de la pelicula.

Resultados, interactua con el componente Buscador, el cual es un input para buscar nombres de peliculas. Una vez hecha la busqueda, las peliculas que hagan match con ese string se renderizan en el componente Resultados.

Favoritos, es donde se muestran las peliculas que se agregaron a favoritos. Obtiene la informacion desde el locastorage
