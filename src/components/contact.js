import React from "react";
import "../stylesheets/contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h1 className="main-heading">Contact Me</h1>
      <h2 className="sub-heading">Drop me a line and lets have a chat</h2>
      <form className="contact-form">
        <div className="contact-text-inputs">
          <div className="form-section">
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input className="text-input" type="text" name="name" />
          </div>
          <div className="form-section">
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input className="text-input" type="text" />
          </div>
        </div>
        <div className="form-section">
          <label className="contact-label" htmlFor="message">
            Message
          </label>
          <textarea className="contact-textarea"></textarea>
        </div>
        <button className="contact-form-button">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
