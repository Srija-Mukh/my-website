import React from 'react';
import './styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({
  contactRef,
  journeyRef,
  projectsRef,
  learningRef,
  aboutRef,
}) {
  const goToContact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behaviour: 'smooth' });
  };

  const goToJourney = (e) => {
    e.preventDefault();
    journeyRef.current.scrollIntoView({ behaviour: 'smooth' });
  };

  const goToProjects = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behaviour: 'smooth' });
  };

  const goToLearning = (e) => {
    e.preventDefault();
    learningRef.current.scrollIntoView({ behaviour: 'smooth' });
  };

  const goToAbout = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behaviour: 'smooth' });
  };

  return (
    <Navbar fixed='top' bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <h3 class='heading brand'>Srija Mukherjee</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link id='about-me' href='#' onClick={goToAbout}>
              <p>about me</p>
            </Nav.Link>
            <Nav.Link id='journey' href='#' onClick={goToJourney}>
              <p>journey</p>
            </Nav.Link>
            <Nav.Link id='projects' href='#' onClick={goToProjects}>
              <p>projects</p>
            </Nav.Link>
            <Nav.Link id='learning' href='#' onClick={goToLearning}>
              <p>learning</p>
            </Nav.Link>
            <Nav.Link id='contact' href='#' onClick={goToContact}>
              <p>contact</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
