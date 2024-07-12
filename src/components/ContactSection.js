import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  // Contact form state and logic
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-4 bg-light">
      <Container className="py-4">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-3">
            Send Message
          </Button>
        </Form>
        {messageSent && <p className="text-success text-center">Message sent successfully!</p>}
      </Container>
    </section>
  );
};

export default ContactSection;
