import React from 'react';
import { Nav } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import logo from '../../assets/logo.jpg';
import { LinkContainer } from 'react-router-bootstrap';


const FullScreenMenu = ({ show, closeMenu }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fullscreen-menu">
        <X size={32} className="close-icon" onClick={closeMenu} />
        <img src={logo} alt="Logo" className="menu-logo" />
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
    </div>
    );
};

export default FullScreenMenu;
