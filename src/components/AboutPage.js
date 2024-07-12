import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">About Me</h2>
          <div className="text-center mb-4">              
                <Image
                  src="https://mail.google.com/mail/u/0?ui=2&ik=433a95d88b&attid=0.1&permmsgid=msg-a:r8781497426201665326&th=190a7c0e6b2bf219&view=att&disp=safe&realattid=f_lyiwp2dp0" // Replace with your image URL
                  roundedCircle
                  className="mb-2 justify-content-center"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  alt="Profile"
                />
                <h5>Joseph Oguti</h5>
                <p>Electronics & Computer Engineer</p>
              
            </div>
          <p className="text-center">
            I am a competent, organized, and detail-oriented electronics and computer engineering student with a strong background in electrical engineering principles and the fundamentals of Computer Science. A collaborative team player with an interest in technology and innovation. I can solve complex problems through hands-on projects and courses of study, delivering efficient solutions. Eager to apply theoretical knowledge and practical skills to contribute to the advancement of electronics and computer engineering. Most importantly, I am open to continuous learning.
          </p>
          <hr />

          <div className="mb-4">
            <h4>My Mission</h4>
            <p>
              Aspire to Inspire
            </p>
          </div>

          <div className="mb-4">
            <h4>History</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget risus venenatis
              consequat. Nullam eget odio venenatis, vehicula diam nec, tempor ipsum.
            </p>
          </div>

          

          <div className="mb-4">
            <h4>Contact Me</h4>
            <p>
              For inquiries or collaborations, please reach out to me at:
              <br />
              Email: josephoguti02@gmail.com
            </p>
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
