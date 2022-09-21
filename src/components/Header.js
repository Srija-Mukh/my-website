import React from "react";
import "./styles/Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
    <div class='header'>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><h3 class='heading brand'>Srija Mukherjee</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link id="about-me" href="#"><p>about me</p></Nav.Link>
                <Nav.Link id="journey" href="#"><p>journey</p></Nav.Link>
                <Nav.Link id="projects" href="#"><p>projects</p></Nav.Link>
                <Nav.Link id="learning" href="#"><p>learning</p></Nav.Link>
                <Nav.Link id="contact" href="#"><p>contact</p></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>)
}

export default Header;