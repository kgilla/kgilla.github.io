import React from "react";
import { Link } from "@reach/router";
import "../stylesheets/navbar.css";

function Navbar() {
  return (
    <nav className="main-nav">
      <div className="nav-left-links">
        <Link className="nav-icon" to="/">
          KG
        </Link>{" "}
      </div>
      <div className="nav-right-links">
        <Link className="nav-link" to="/">
          Home
        </Link>{" "}
        <Link className="nav-link" to="/#project-section">
          {""}
          Projects
        </Link>{" "}
        <Link className="nav-link" to="/">
          {" "}
          Contact
        </Link>{" "}
        <Link className="nav-link" to="blog">
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
