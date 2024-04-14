import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={4} className="text-sm-center text-md-left">
            &copy; {new Date().getFullYear()} Az. Agricola Zuccante Marco
          </Col>
          <Col sm={12} md={4} className="text-center">
            <Link to="/Login">Amministrazione</Link>
          </Col>
          <Col sm={12} md={4} className="text-sm-center text-md-right">
            Seguici su
            <a href="#"> Facebook</a> |<a href="#"> Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
