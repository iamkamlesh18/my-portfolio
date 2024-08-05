import React from 'react';

const ContactForm = () => {
  return (
    <>
    <div className="contact-form">
      <h2>Contact Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>


<div className="google-form-container">
      <iframe
          title="Contact Form" // Add a descriptive title here
          src="https://docs.google.com/forms/d/1LWS_mINDFQIT9486GPuUBRD50D6nbSlMk_qpWmLc0cI/edit?usp=drivesdk&chromeless=1"
          width="100%"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
      </iframe>
    </div>
    </>
  );
};

export default ContactForm;
