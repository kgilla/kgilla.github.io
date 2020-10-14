import React, {useState} from "react";
import "./contact.css";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [confirmation, setConfirmation] = useState("")

  const fetchData = async (contact) => {
    try {
      const URL = `https://api-myblog.herokuapp.com/contacts/create`;
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      setConfirmation(data.message)
    } catch(err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const v = e.target.value
    e.target.name === "name" ? setName(v) 
    : e.target.name === "email" ? setEmail(v) 
    : setMessage(v);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {name, email, message};
    fetchData(contact)
    }
  return (
    <div className="contact-section">
      <h1 className="main-heading">Contact Me</h1>
      <h2 className="sub-heading">Drop me a line and lets have a chat!</h2>
      {confirmation ? <h2>{confirmation}</h2> : null}
      <form className="form" id="contact-form">
        <div className="text-inputs">
          <div className="form-section">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input className="text-input" type="text" name="name" value={name} onChange={handleChange}/>
          </div>
          <div className="contact-spacer"></div>
          <div className="form-section">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input className="text-input" type="email" name="email" value={email} onChange={handleChange} />
          </div>
        </div>
        <div className="form-section">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea className="textarea" name="message" value={message} onChange={handleChange}></textarea>
        </div>
        <div className="form-section">
          <button className="form-button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Contact;
