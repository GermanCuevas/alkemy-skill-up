import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import Redirect from "./Redirect";

function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      MySwal.fire("<h2>Los campos no deben estar vacios !</h2>");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      MySwal.fire(
        "<h2>Debes escribir una direccion de correo electronica valida!</h2>"
      );

      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      MySwal.fire("<h2>Credenciales invalidas!</h2>");

      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        MySwal.fire("<h2>Ingresaste correctamente!</h2>");
        console.log(res.data);
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        navigate("/listado");
      });
  };

  let token = sessionStorage.getItem("token");

  if (token) {
    return <Redirect to={"/listado"} />;
  }

  return (
    <form onSubmit={submitHandler} className="container text-center">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
