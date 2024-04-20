import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Finocchio.css';
import carciofo from '../../assets/finocchio.jpg';
import cassa from '../../assets/cassafinocchi.jpg';
import campo from '../../assets/pedanafinocchi.jpg';
import mazzo from '../../assets/finocchiotagliato.jpg';

const Finocchio = () => {
  const [articles, setArticles] = useState({});
  const [colture, setColture] = useState([]);

  useEffect(() => {
    fetchArticles();
    fetchColture([14]);
  }, []);

  const titles = {
    1009: "Introduzione",
    1023: "Valori nutrizionali",
    1024: "Conservazione",
    1025: "In conclusione"
    
  };
  const images = {
    1009: carciofo,
    1023: cassa,
    1024: campo,
    1025: mazzo
  };

  const fetchArticles = async () => {
    const ids = [1009, 1023, 1024, 1025];
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
      <div className='photoHolder5'><h1 className='text-center'>FINOCCHIO</h1></div>
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

export default Finocchio;
