import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Logo, Github, LinkedIn } from "../../images";

export default function Header() {
  return (
    <header role="header" className="Header">
      <Link to="/" className="Logo">
        <Logo color={"#000"} />
      </Link>
      <nav className="MainMenu">
        <ul>
          <li>
            <a
              href="https://github.com/groev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/magnuswesthofen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
