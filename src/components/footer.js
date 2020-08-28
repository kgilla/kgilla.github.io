import React from "react";
import { Github, Linkedin } from "@styled-icons/simple-icons";

import "../stylesheets/footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <h1>Passion Drives Everything. Never Stop Learning</h1>
      <div className="footer-links">
        <Github className="social-icon" />
        <Linkedin className="social-icon" />
      </div>
      <h2>Crafted by me.</h2>
    </div>
  );
}
export default Footer;
