
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png'

const Navigation = () => {
    return (
        <div className=''>
            <Navbar style={{ backgroundColor: '#FBD062' }} bg="#FBD062" variant="light">
            <img style={{width:'150px', height:'47px'}} className='mx-auto' src={logo} alt="" />
    <Container>

    
    <Nav className="mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Button variant="outline-primary">Login</Button>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navigation;