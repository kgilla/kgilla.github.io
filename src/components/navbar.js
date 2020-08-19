import React, { useState } from "react";

function Navbar() {
  const [value] = useState("yes");
  return (
    <nav>
      <div>
        <a href="/" className="nav-link">
          Home
        </a>
      </div>
      <div>
        <a href="/projects" className="nav-link">
          {value}
        </a>
      </div>
      <div>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
      <div>
        <a href="/blog" className="nav-link">
          Blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
