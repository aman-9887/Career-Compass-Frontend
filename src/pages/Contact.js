import React, { useState } from 'react';
import '../assets/Contact.css'; // Include the custom CSS for this page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mvggnvvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please reach out with any questions or feedback.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Contact Info</h2>
          <ul>
            <li>
              <strong>Email:</strong> <a href="amankumar3927828@gmail.com">aman3927828@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +91 7001938384
            </li>
            <li>
              <strong>Address:</strong> Career Compass , Durgapur, India
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
          ) : (
            <div className="thank-you-message">
              <h3>Thank you for reaching out!</h3>
              <p>We have received your message and will get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
