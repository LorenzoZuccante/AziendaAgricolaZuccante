import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Cocomero.css';
import carciofo from '../../assets/cocomero.jpg';
import cassa from '../../assets/binscoc.jpg';
import campo from '../../assets/Cocomero_copertina.jpg';
import mazzo from '../../assets/anguria-a-cubetti.jpg';
import mazzo1 from '../../assets/coc1.webp';

const Cocomero = () => {
  const [articles, setArticles] = useState({});
  const [colture, setColture] = useState([]);

  useEffect(() => {
    fetchArticles();
    fetchColture([11]);
  }, []);

  const titles = {
    1010: "Introduzione",
    1026: "Metodi colturali",
    1027: "Valori nutrizionali",
    1028: "Conservazione",
    1029: "In conclusione"
    
  };
  const images = {
    1010: carciofo,
    1026: cassa,
    1027: campo,
    1028: mazzo,
    1029: mazzo1
  };
  const fetchArticles = async () => {
    const ids = [1010, 1026, 1027, 1028, 1029];
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
      <div className='photoHolder6'><h1 className='text-center'>COCOMERO</h1></div>
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

export default Cocomero;
