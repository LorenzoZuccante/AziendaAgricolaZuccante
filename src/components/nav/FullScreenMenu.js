import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import logo from '../../assets/logo.jpg';
import { LinkContainer } from 'react-router-bootstrap';

const FullScreenMenu = ({ show, closeMenu, isAuthenticated }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fullscreen-menu">
            <X size={32} className="close-icon" onClick={closeMenu} />
            <img src={logo} alt="Logo" className="menu-logo" />
            {isAuthenticated ? (
                <>
                    <Nav className="flex-column m-auto text-center">
                        <NavDropdown title="Applicativo" id="nav-dropdown-left">
                            <LinkContainer to="/chisiamo" onClick={closeMenu}>
                                <NavDropdown.Item>Chi siamo</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/prodotti" onClick={closeMenu}>
                                <NavDropdown.Item>Prodotti</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/filiera" onClick={closeMenu}>
                                <NavDropdown.Item>Filiera</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/incampo" onClick={closeMenu}>
                                <NavDropdown.Item>In campo</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/contatti" onClick={closeMenu}>
                                <NavDropdown.Item>Contatti</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/galleria" onClick={closeMenu}>
                                <NavDropdown.Item>Galleria</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <NavDropdown title="Gestione" id="nav-dropdown-right">
                            <LinkContainer to="/gestione-colture" onClick={closeMenu}>
                                <NavDropdown.Item>Gestione Colture</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/gestione-previsioni" onClick={closeMenu}>
                                <NavDropdown.Item>Gestione Previsioni</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/gestione-sviluppo" onClick={closeMenu}>
                                <NavDropdown.Item>Gestione Sviluppi</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/gestione-produzioni" onClick={closeMenu}>
                                <NavDropdown.Item>Gestione Produzioni</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/gestione-articolo" onClick={closeMenu}>
                                <NavDropdown.Item>Gestione Articoli</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </>
            ) : (
                <Nav className="flex-column m-auto text-center">
                    <LinkContainer to="/" onClick={closeMenu}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/chisiamo" onClick={closeMenu}>
                        <Nav.Link>Chi siamo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/prodotti" onClick={closeMenu}>
                        <Nav.Link>Prodotti</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/filiera" onClick={closeMenu}>
                        <Nav.Link>Filiera</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/incampo" onClick={closeMenu}>
                        <Nav.Link>In campo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contatti" onClick={closeMenu}>
                        <Nav.Link>Contatti</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/galleria" onClick={closeMenu}>
                        <Nav.Link>Galleria</Nav.Link>
                    </LinkContainer>
                </Nav>
            )}
        </div>
    );
};

export default FullScreenMenu;
