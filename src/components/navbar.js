import React, { useState } from "react";
import { Link } from "@reach/router";
import "../stylesheets/navbar.css";

function Navbar(props) {
  let [expandedMenu, setExpandedMenu] = useState("closed");

  const handleClick = () => {
    expandedMenu === "closed"
      ? setExpandedMenu("open")
      : setExpandedMenu("closed");
  };

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="nav-left-links">
          <Link className="nav-icon" to="/">
            KG
          </Link>{" "}
        </div>
        {props.width > 1024 ? (
          <div className="nav-right-links">
            <Link className="nav-link" to="projects">
              Projects
            </Link>

            <Link className="nav-link" to="blog">
              Blog
            </Link>
            <Link className="nav-link" to="contact">
              Contact
            </Link>
          </div>
        ) : expandedMenu === "closed" ? (
          <button className="expand-menu-button" onClick={handleClick}>
            +
          </button>
        ) : (
          <button className="expand-menu-button" onClick={handleClick}>
            -
          </button>
        )}
      </nav>
      {expandedMenu === "open" ? (
        <nav className="expanded-nav">
          <Link className="nav-link" to="projects">
            Projects
          </Link>

          <Link className="nav-link" to="blog">
            Blog
          </Link>
          <Link className="nav-link" to="contact">
            Contact
          </Link>
        </nav>
      ) : null}
    </div>
  );
}

export default Navbar;
