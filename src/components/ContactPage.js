import React from 'react';
import ContactSection from './ContactSection';
import { FaWhatsapp } from 'react-icons/fa';
import { Container, Button } from 'react-bootstrap';

const ContactPage = () => {
  const whatsappNumber = '256703181192'; // Replace with your WhatsApp number

  return (
    <div>
      <ContactSection />
      <Container className="p-4 text-center">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success rounded-lg"
        >
          <FaWhatsapp className="mr-2" /> Message Me on WhatsApp
        </a>
      </Container>
    </div>
  );
};

export default ContactPage;
