import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Melone.css';
import carciofo from '../../assets/melbins1.jpg';
import cassa from '../../assets/melcassa1.jpg';
import campo from '../../assets/melimp.jpg';

const Melone = () => {
  const [articles, setArticles] = useState({});
  const [colture, setColture] = useState([]);

  useEffect(() => {
    fetchArticles();
    fetchColture([8, 9, 10]);
  }, []);

  const titles = {
    1011: "Retato",
    1030: "Francesino",
    1031: "Polpa rossa"
    
  };
  const images = {
    1011: carciofo,
    1030: cassa,
    1031: campo
  };

  const fetchArticles = async () => {
    const ids = [1011, 1030, 1031];
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

  const fetchColture = async (ids) => {
    try {
      const fetchedColture = [];
      for (const id of ids) {
        const response = await fetch(`https://localhost:44309/api/Colture/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok for coltura ' + id);
        }
        const data = await response.json();
        fetchedColture.push(data);
      }
      setColture(fetchedColture);
    } catch (error) {
      console.error('Error fetching colture:', error);
    }
  };

  return (
    <Container fluid className="carciofo p-0">
      <div className='photoHolder8'><h1 className='text-center'>MELONE</h1></div>
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
                  <div className="image-circle" style={{ backgroundImage: `url(${images[id]})` }}></div>
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="image-content animated-left">
                  <div className="image-circle" style={{ backgroundImage: `url(${images[id]})` }}></div>
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
              <thead>
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
                {colture.map(coltura => (
                  <tr key={coltura.ColturaID}>
                    <td>{coltura.Nome}</td>
                    <td>{coltura.NomeScientifico}</td>
                    <td>{coltura.Famiglia}</td>
                    <td>{coltura.BrixMedio}</td>
                    <td>{coltura.Calibro}</td>
                    <td>{coltura.Origine}</td>
                    <td>{coltura.Produzione}</td>
                    <td>{coltura.Confenzionamento}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Melone;
