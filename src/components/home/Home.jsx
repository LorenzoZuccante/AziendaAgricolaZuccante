import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Container className="home">
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h1>Benvenuti nella Mia Azienda Agricola</h1>
          <p>
            Esplora i nostri prodotti e scopri di più sulla nostra filosofia.
          </p>
          <Button variant="primary" href="#prodotti">
            Esplora Prodotti
          </Button>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
          <h2>Prova</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
