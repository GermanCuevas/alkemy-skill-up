import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ to }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);
}

export default Redirect;
