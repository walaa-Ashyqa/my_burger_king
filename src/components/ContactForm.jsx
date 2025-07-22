// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; // Custom CSS for styling

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageTitle: '',
    messageText: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to a backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.'); // Using alert for demo, replace with custom modal
    setFormData({ // Reset form
      name: '',
      email: '',
      phone: '',
      messageTitle: '',
      messageText: '',
    });
  };

  return (
    <Form className="contact-form  rounded-4 shadow p-4 p-md-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="The name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-pill px-3 py-2"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-pill px-3 py-2"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-pill px-3 py-2"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Message title"
          name="messageTitle"
          value={formData.messageTitle}
          onChange={handleChange}
          className="rounded-pill px-3 py-2"
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Message text"
          name="messageText"
          value={formData.messageText}
          onChange={handleChange}
          required
          className="rounded-4 px-3 py-2"
        />
      </Form.Group>
      <Button type="submit" className="send-button custom-btn-orange rounded-pill w-100 py-2">
        Send
      </Button>
    </Form>
  );
}

export default ContactForm;
