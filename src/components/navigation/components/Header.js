import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "../../../assets/files/MarkF_FullStackResume.pdf";

function Header() {
  return (
    <div>
      {" "}
      <header className="header">
        <ul className="menu align-items-start">
          <li>
            <Link className="menu-btn" to="/MarkForesterReact">
              Welcome
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/MarkForesterReact/About">
              About Me
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/MarkForesterReact/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/MarkForesterReact/Contact">
              Contact Me
            </Link>
          </li>
          <li>
            <a
              className="menu-btn"
              target="_blank"
              rel="noreferrer"
              href={Portfolio}
            >
              Résumé
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
