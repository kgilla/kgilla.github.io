import React from "react";
import { Link } from "@reach/router";
import "../stylesheets/navbar.css";

function Navbar() {
  return (
    <nav className="main-nav">
      <Link className="nav-link" to="/">
        Home
      </Link>{" "}
      <Link className="nav-link" to="/projects">
        Projects
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
      <Link className="nav-link" to="/blog">
        Blog
      </Link>
    </nav>
  );
}

export default Navbar;
