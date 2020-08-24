import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Navbar from "./navbar";
import BlogIndex from "./blog-index";
import Home from "./home";
import Contact from "./contact";
import Projects from "./projects";
import BlogPost from "./blog-post";
import "../stylesheets/app.css";

function App() {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const URL = "http://localhost:5000/api/posts/";
      const response = await fetch(URL);
      const data = await response.json();
      setData(data.posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <Contact path="contact" />
        <BlogIndex isLoading={isLoading} data={data} path="blog" />
        <BlogPost path="blog/:postId" />
      </Router>
    </div>
  );
}

export default App;
