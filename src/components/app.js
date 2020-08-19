import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Blog from "./blog";
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
      <Blog isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
