import React from "react";
import { Github, Linkedin } from "@styled-icons/simple-icons";

import "../stylesheets/footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-links">
        <Github className="social-icon" />
        <Linkedin className="social-icon" />
      </div>
      <h2 className="footer-sub-heading">Crafted by me, Kgilla.</h2>
    </div>
  );
}
export default Footer;
