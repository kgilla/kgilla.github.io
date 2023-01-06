import React, { useState } from "react";
import { Link } from "@reach/router";
import "./navbar.css";
import { Menu, Close } from "@styled-icons/material-outlined";

function Navbar(props) {
  let [isOpen, setIsOpen] = useState(false);
  
  const containerClasses = {
    open: "expanded-nav open-nav",
    wide: "nav-right-links",
  }

  const handleClick = () => { setIsOpen(!isOpen)};

  return (
    <div className="nav-container">
      <nav className="main-nav">
        <div className="nav-left-links">
          <Link className="nav-icon" to="/">
            KG
          </Link>{" "}
        </div>
        {props.width > 1024 ? (
          <NavLinks containerClass={containerClasses.wide} onClick={handleClick}/>
        ) : isOpen ? (
          <Close className="menu-hamburger spinulator" onClick={handleClick} />
        ) : (
          <Menu className="menu-hamburger" onClick={handleClick} />
        )}
      </nav>
      {isOpen ? <NavLinks handleClick={handleClick} containerClass={containerClasses.open}/> : null}
    </div>
  );
}

const NavLinks = ({handleClick, containerClass}) => {
  return (
    <ul className={containerClass}>    
      <Link className="nav-link" to="projects" onClick={handleClick}>
        Projects
      </Link>
      <Link className="nav-link" to="blog" onClick={handleClick}>
        Blog
      </Link>
      <Link className="nav-link" to="contact" onClick={handleClick}>
        Contact
      </Link>
    </ul>
  )
}

export default Navbar;
