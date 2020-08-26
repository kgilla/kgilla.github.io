import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Navbar from "./navbar";
import BlogIndex from "./blog-index";
import Home from "./home";
import Contact from "./contact";
import ProjectIndex from "./project-index";
import BlogPost from "./blog-post";
import "../stylesheets/app.css";

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
        <BlogIndex path="blog" />
        <BlogPost path="blog/:postId" />
      </Router>
    </div>
  );
}

export default App;
