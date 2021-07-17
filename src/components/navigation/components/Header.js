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
            <Link className="menu-btn" to="/">
              Welcome
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/About">
              About Me
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="menu-btn" to="/Contact">
              Contact Me
            </Link>
          </li>
          <li>
            <a className="menu-btn" href={Portfolio}>
              Résumé
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
