import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
   <div className="Form">
    <div className="contact-box">
        <div className="left"></div>
        <div className="right">
            <h2>Contact Us</h2>
            <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
        </div>
    </div>
   </div>
  );
}

export default Contact;
