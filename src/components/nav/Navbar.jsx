import React, { useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.jpg";
import FullScreenMenu from "./FullScreenMenu";
import './Navbar.css'

const NavigationBar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/');
  };

  return (
    <>
      <Navbar bg="warning" expand="md" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            {isAuthenticated ? (
              <>
                <Nav className="me-auto">
                  <NavDropdown title="Applicativo" id="basic-nav-dropdown-left">
                  <LinkContainer to="/">
                  <NavDropdown.Item>Home</NavDropdown.Item>
                </LinkContainer>
                    <LinkContainer to="/chisiamo">
                      <NavDropdown.Item>Chi siamo</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown title="Prodotti" id="nav-dropdown-prodotti">
            <LinkContainer to="/carciofo">
                <NavDropdown.Item>Carciofo</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/brassicaceae">
                <NavDropdown.Item>Brassicaceae</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/finocchio">
                <NavDropdown.Item>Finocchio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/cocomero">
                <NavDropdown.Item>Cocomero</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/melone">
                <NavDropdown.Item>Melone</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown>
                    <LinkContainer to="/filiera">
                      <NavDropdown.Item>Filiera</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/contatti">
                      <NavDropdown.Item>Contatti</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/galleria">
                      <NavDropdown.Item>Galleria</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
                <Navbar.Brand href="/" className="mx-auto">
                  <img src={logo} alt="Logo" id="logo1" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                  <NavDropdown title="Gestione" id="basic-nav-dropdown-right">
                    <LinkContainer to="/gestione-colture">
                      <NavDropdown.Item>Gestione Colture</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gestione-previsioni">
                      <NavDropdown.Item>Gestione Previsioni</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gestione-sviluppo">
                      <NavDropdown.Item>Gestione Sviluppi</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gestione-produzioni">
                      <NavDropdown.Item>Gestione Produzioni</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gestione-articolo">
                      <NavDropdown.Item>Gestione Articoli</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </>
            ) : (
              <Nav className="mt-auto">
                                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/chisiamo">
                  <Nav.Link>Chi siamo</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Prodotti" id="nav-dropdown-prodotti1">
            <LinkContainer to="/carciofo">
                <NavDropdown.Item>Carciofo</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/brassicaceae">
                <NavDropdown.Item>Brassicaceae</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/finocchio">
                <NavDropdown.Item>Finocchio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/cocomero">
                <NavDropdown.Item>Cocomero</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/melone">
                <NavDropdown.Item>Melone</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>
                <Navbar.Brand href="/" className="mx-auto">
                  <img src={logo} alt="Logo" id="logo1" />
                </Navbar.Brand>
                <LinkContainer to="/filiera">
                  <Nav.Link>Filiera</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contatti">
                  <Nav.Link>Contatti</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/galleria">
                  <Nav.Link>Galleria</Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
          {isAuthenticated && (
  <Button variant="outline-danger" onClick={handleLogout} className="logout-button">
    <i className="bi bi-box-arrow-right"></i> Logout
  </Button>
)}
        </Container>
      </Navbar>
      <FullScreenMenu show={expanded} closeMenu={() => setExpanded(false)} isAuthenticated={isAuthenticated} />
    </>
  );
};

export default NavigationBar;
