import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../public/logo-ebazar.png'

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="eBazar Logo"
            width="150px" 
            height="80px"
            className="d-inline-block align-top"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{fontSize:'20px', color:'#670846'}}>Home</Nav.Link>
            <NavDropdown 
  title={<span style={{fontSize:'20px', color:'#670846'}}>Products</span>} 
  id="basic-nav-dropdown"
>
<NavDropdown.Item href="/products">All products</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Women Wear</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.2">Men Wear</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.3">Jewellery Items</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.4">Electronics</NavDropdown.Item>
</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
