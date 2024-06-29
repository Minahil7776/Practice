import React from 'react';
import { Navbar, Nav, Container,Form,FormControl } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar style={{backgroundColor:"#9b59b6", padding:"10px"}} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{cursor:"pointer"}}>My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link href="/contect" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
