import React, { useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import logo from "../../assets/logo.jpg";
import { LinkContainer } from "react-router-bootstrap";
import './Navbar.css';

const FullScreenMenu = ({ show, closeMenu, isAuthenticated }) => {
  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;
    body.style.overflow = show ? 'hidden' : originalStyle;

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fullscreen-menu">
      <X size={32} className="close-icon" onClick={closeMenu} />
      <img src={logo} alt="Logo" className="menu-logo" />
      {isAuthenticated ? (
        <Nav className="flex-column m-auto text-center">
          <NavDropdown title="Applicativo" id="nav-dropdown-left">
            <LinkContainer to="/" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Home</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chisiamo" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Chi siamo</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown title="Prodotti" className="eproviamo3" id="nav-dropdown-prodotti2">
              <LinkContainer to="/carciofo" onClick={closeMenu}>
                <NavDropdown.Item className="eproviamo2">Carciofo</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/brassicaceae" onClick={closeMenu}>
                <NavDropdown.Item className="eproviamo2">Brassicaceae</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/finocchio" onClick={closeMenu}>
                <NavDropdown.Item className="eproviamo2">Finocchio</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/cocomero" onClick={closeMenu}>
                <NavDropdown.Item className="eproviamo2">Cocomero</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/melone" onClick={closeMenu}>
                <NavDropdown.Item className="eproviamo2">Melone</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/filiera" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Filiera</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/contatti" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Contatti</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/galleria" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Galleria</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavDropdown title="Gestione" id="nav-dropdown-right">
            <LinkContainer to="/gestione-colture" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Gestione Colture</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/gestione-previsioni" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2"> Gestione Previsioni</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/gestione-sviluppo" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Gestione Sviluppi</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/gestione-produzioni" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Gestione Produzioni</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/gestione-articolo" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Gestione Articoli</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav className="flex-column m-auto text-center">
          <LinkContainer to="/" onClick={closeMenu}>
            <Nav.Link className="eproviamo">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/chisiamo" onClick={closeMenu}>
            <Nav.Link className="eproviamo">Chi siamo</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Prodotti" className="eproviamo" id="nav-dropdown-prodotti4">
            <LinkContainer to="/carciofo" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Carciofo</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/brassicaceae" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Brassicaceae</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/finocchio" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Finocchio</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/cocomero" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Cocomero</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/melone" onClick={closeMenu}>
              <NavDropdown.Item className="eproviamo2">Melone</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/filiera" onClick={closeMenu}>
            <Nav.Link className="eproviamo">Filiera</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contatti" onClick={closeMenu}>
            <Nav.Link className="eproviamo">Contatti</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/galleria" onClick={closeMenu}>
            <Nav.Link className="eproviamo">Galleria</Nav.Link>
          </LinkContainer>
        </Nav>
      )}
    </div>
  );
};

export default FullScreenMenu;
