import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact <span>Me</span></h2>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
