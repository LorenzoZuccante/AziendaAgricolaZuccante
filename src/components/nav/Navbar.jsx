import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import FullScreenMenu from "./FullScreenMenu";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
 

const NavigationBar = ({ isAuthenticated, logout }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    logout(); 
    navigate('/');
  };

  return (
    <>
      <Navbar bg="warning" expand="md" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <LinkContainer to="/chisiamo">
                <Nav.Link>Chi siamo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/prodotti">
                <Nav.Link>Prodotti</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/filiera">
                <Nav.Link>Filiera</Nav.Link>
              </LinkContainer>
              <Navbar.Brand href="/" className="mx-auto">
                <img id="logo1" src={logo} alt="Logo" />
              </Navbar.Brand>
              <LinkContainer to="/incampo">
                <Nav.Link>In campo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contatti">
                <Nav.Link>Contatti</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/galleria">
                <Nav.Link>Galleria</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
              {isAuthenticated && (
                <Button variant="outline-danger" onClick={handleLogout} className="logout-button">
                <i className="bi bi-box-arrow-right"></i>
              </Button>
              )}
        </Container>
      </Navbar>
      <FullScreenMenu show={expanded} closeMenu={() => setExpanded(false)} />
    </>
  );
};

export default NavigationBar;
