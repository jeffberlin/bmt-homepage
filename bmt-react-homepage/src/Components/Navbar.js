import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../images/bmt-logo-2.png';

function Navigation() {
  return (
    <Container>
      <Navbar defaultExpanded>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="BMT Micro logo" width={120} />
        </Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link>Company</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation;
