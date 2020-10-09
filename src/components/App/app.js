import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Navbar from "../Navbar";
import BlogIndex from "../BlogIndex";
import Home from "../Home";
import Contact from "../Contact";
import ProjectIndex from "../ProjectIndex";
import BlogPost from "../BlogPost";

import "./reset.css";
import "./app.css";

function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      <Navbar width={windowWidth} />
      <Router>
        <Home path="/" />
        <ProjectIndex path="/projects" />
        <Contact path="contact" />
        <BlogIndex path="blog" width={windowWidth} />
        <BlogPost path="blog/:postId" />
      </Router>
    </div>
  );
}

export default App;
