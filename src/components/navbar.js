import React, { useState } from "react";
import { Link } from "@reach/router";
import "../stylesheets/navbar.css";
import { Menu } from "@styled-icons/material-outlined";

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
          <Menu className="menu-hamburger" onClick={handleClick} />
        ) : (
          <Menu className="menu-hamburger" onClick={handleClick} />
        )}
      </nav>
      {expandedMenu === "open" ? (
        <nav className="expanded-nav">
          <Link className="nav-link" to="projects" onClick={handleClick}>
            Projects
          </Link>

          <Link className="nav-link" to="blog" onClick={handleClick}>
            Blog
          </Link>
          <Link className="nav-link" to="contact" onClick={handleClick}>
            Contact
          </Link>
        </nav>
      ) : null}
    </div>
  );
}

export default Navbar;
