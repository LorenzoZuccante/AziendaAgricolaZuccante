import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Instagram } from "react-bootstrap-icons";
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={3} className="text-center text-md-left mb-3 mb-md-0">
            <img
              src={logo}
              alt="Azienda Zuccante Logo"
              className="footer-logo"
            />
          </Col>
          <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
             {new Date().getFullYear()} Az. Agricola Zuccante Marco &copy; <br />
             Via san carlo a Palidoro 170, 00054, Fiumicino RM <br/>
            P.IVA: 05484511000 <br/>
            Tutti i diritti sono riservati
          </Col>
          <Col xs={12} md={3} className="text-center text-md-right">
          <Link to="/login" className="privacy-link">
              Amministrazione
            </Link>
            <Link to="/privacy-policy" className="privacy-link">
              Privacy Policy
            </Link>
            <Link to="/contatti" className="privacy-link">
              Contattaci
            </Link>
            <div className="social-icons">
              <a href="https://www.instagram.com/az.zuccantemarco/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                <Instagram size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

