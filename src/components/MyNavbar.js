// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-blue-1000">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-black">
          My Blog
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/about" className="text-black">
          About
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/contact" className="text-black">
          Contact Us
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-black">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            
            <NavDropdown title="More" id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item as={Link} to="#action/3.1">
                Action
              </NavDropdown.Item>
              
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
