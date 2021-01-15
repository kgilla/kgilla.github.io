import React from "react";
import { Github, Linkedin } from "@styled-icons/simple-icons";

import "./footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-links">
        <a
          href="https://github.com/kgilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kenneth-gilmore-74704011a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
