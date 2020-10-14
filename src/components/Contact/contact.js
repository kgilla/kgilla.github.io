import React, { useState } from "react";
import "./contact.css";

function Contact() {
  let [name, setName] = useState("");
  let [nameError, setNameError] = useState("");
  let [email, setEmail] = useState("");
  let [emailError, setEmailError] = useState("");
  let [message, setMessage] = useState("");
  let [messageError, setMessageError] = useState("");
  let [success, setSuccess] = useState("");

  const fetchData = async (contact) => {
    try {
      const URL = `https://api-myblog.herokuapp.com/contacts/create`;
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      response.status === 200 ? handleSuccess(data) : handleError(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSuccess = (data) => {
    setSuccess(data.message);
    clearForm();
  };

  const handleError = (data) => {
    console.log(data);
  };

  const validator = (contact) => {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let problem = false;
    if (contact.name.length < 1) {
      setNameError("Please enter a name");
      problem = true;
    }
    if (!contact.email.match(reg)) {
      setEmailError("Please enter a valid email");
      problem = true;
    }
    if (contact.message.length < 1) {
      setMessageError("Please enter a message");
      problem = true;
    }
    return problem;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const clearError = (name) => {
    name === "name"
      ? setNameError("")
      : name === "email"
      ? setEmailError("")
      : setMessageError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    clearError(name);
    name === "name"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email, message };
    let problem = validator(contact);
    if (!problem) {
      fetchData(contact);
    }
  };

  return (
    <div className="contact-section">
      <h1 className="main-heading">Contact Me</h1>
      <h2 className="sub-heading">Drop me a line and lets have a chat!</h2>
      {success ? <p className="success">{success}</p> : null}
      <form className="form" id="contact-form" onSubmit={handleSubmit}>
        <div className="text-inputs">
          <div className="form-section">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className={nameError ? "text-input-error" : "text-input"}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
            {nameError ? <p className="error">{nameError}</p> : null}
          </div>
          <div className="contact-spacer"></div>
          <div className="form-section">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className={emailError ? "text-input-error" : "text-input"}
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {emailError ? <p className="error">{emailError}</p> : null}
          </div>
        </div>
        <div className="form-section">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className={messageError ? "textarea-error" : "textarea"}
            name="message"
            value={message}
            onChange={handleChange}
          ></textarea>
          {messageError ? <p className="error">{messageError}</p> : null}
        </div>
        <div className="form-section">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
