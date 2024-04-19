import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Carciofo.css';
import placeholderImg from '../../assets/FilieraImg1.jpg';

const Carciofo = () => {
  const [articles, setArticles] = useState({});
  const [coltura, setColtura] = useState({});

  useEffect(() => {
    fetchArticles();
    fetchColtura(7);
  }, []);
  const titles = {
    1007: "Introduzione al Carciofo",
    1016: "Certificazioni",
    1017: "Conservazione",
    1018: "In conclusione"
  };

  const fetchArticles = async () => {
    const ids = [1007, 1016, 1017, 1018];
    const fetchedArticles = {};
    try {
      for (const id of ids) {
        const response = await fetch(`https://localhost:44309/api/Articoli/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok for article ' + id);
        }
        const data = await response.json();
        fetchedArticles[id] = data;
      }
      setArticles(fetchedArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const fetchColtura = async (id) => {
    try {
      const response = await fetch(`https://localhost:44309/api/Colture/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok for coltura ' + id);
      }
      const data = await response.json();
      setColtura(data);
    } catch (error) {
      console.error('Error fetching coltura:', error);
    }
  };

  return (
    <Container fluid className="carciofo p-0">
      <div className='photoHolder'><h1 className='text-center'>CARCIOFO <br/> ROMANESCO IGP</h1></div>
      <div className='content-section'>
        {Object.entries(articles).map(([id, article], index) => (
          <Row key={id} className="justify-content-center m-0 article-row align-items-center">
            {index % 2 === 0 ? (
              <>
                <Col md={6} className="text-content animated-left">
                    <h2 className='h2iamo'>{titles[id]}</h2>
                  <p className='section-content'>{article.Contenuto}</p>
                </Col>
                <Col md={6} className="image-content animated-right">
                  <div className="image-circle" style={{ backgroundImage: `url(${placeholderImg})` }}></div>
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="image-content animated-left">
                  <div className="image-circle" style={{ backgroundImage: `url(${placeholderImg})` }}></div>
                </Col>
                <Col md={6} className="text-content animated-right">
                    <h2 className='h2iamo'>{titles[id]}</h2>
                  <p className='section-content'>{article.Contenuto}</p>
                </Col>
              </>
            )}
          </Row>
        ))}
        <Row className="justify-content-center m-0">
  <Col md={12} className="table-responsive">
    <h2 className='h2iamo'>Alcuni dati</h2>
    <Table striped bordered hover className="coltura-table">
      <thead className='franco'>
        <tr>
          <th>Nome</th>
          <th>Nome Scientifico</th>
          <th>Famiglia</th>
          <th>Brix Medio</th>
          <th>Calibro</th>
          <th>Origine</th>
          <th>Produzione</th>
          <th>Confezionamento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{coltura.Nome}</td>
          <td>{coltura.NomeScientifico}</td>
          <td>{coltura.Famiglia}</td>
          <td>{coltura.BrixMedio}</td>
          <td>{coltura.Calibro}</td>
          <td>{coltura.Origine}</td>
          <td>{coltura.Produzione}</td>
          <td>{coltura.Confenzionamento}</td>
        </tr>
      </tbody>
    </Table>
  </Col>
</Row>

      </div>
    </Container>
  );
};

export default Carciofo;
