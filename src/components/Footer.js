import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white fixed-bottom">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            href={"https://www.instagram.com"}
            className="btn btn-outline-light btn-floating m-1"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href={"https://github.com/GermanCuevas?tab=repositories"}
            className="btn btn-outline-light btn-floating m-1"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href={"https://www.linkedin.com/in/german-cuevas-429686171/"}
            className="btn btn-outline-light btn-floating m-1"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </section>
      </div>

      <div className="text-center p-3">
        © 2022 Alkemy Challenge : German Cuevas
      </div>
    </footer>
  );
};

export default Footer;
