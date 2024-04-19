import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Filiera.css'; 
import Filiera1 from '../../assets/FilieraImg1.jpg'
import Filiera2 from '../../assets/FilieraImg2.jpg'
import Filiera3 from '../../assets/FilieraImg3.jpg'

const Filiera = () => {
  const [articolo1006, setArticolo1006] = useState({});
  const [articolo1014, setArticolo1014] = useState({});
  const [articolo1015, setArticolo1015] = useState({});

  useEffect(() => {
    const fetchArticolo = async (id, setArticolo) => {
      try {
        const response = await fetch(`https://localhost:44309/api/Articoli/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticolo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchArticolo(1006, setArticolo1006);
    fetchArticolo(1014, setArticolo1014);
    fetchArticolo(1015, setArticolo1015);
  }, []);

  return (
    <Container fluid className="filiera p-0">
      <div className='photoHolder'><h1 className='text-center'>FILIERA</h1></div>
      <div className='content-section'>
        <Row className="justify-content-center m-0 article-row align-items-center">
          <Col md={6} className="text-content animated-left">
            <h2 className='section-title'>La nostra filiera</h2>
            <p className='section-content'>{articolo1006.Contenuto}</p>
          </Col>
          <Col md={6} className="image-content animated-right">
            <div className="image-circle" style={{ backgroundImage: `url(${Filiera1})` }}></div>
          </Col>
        </Row>
        <Row className="justify-content-center m-0 article-row align-items-center">
          <Col md={6} className="text-content animated-left order-md-2">
            <p className='section-content'>{articolo1014.Contenuto}</p>
          </Col>
          <Col md={6} className="image-content animated-right">
            <div className="image-circle rotatethis" style={{ backgroundImage: `url(${Filiera2})` }}></div>
          </Col>
        </Row>
        <Row className="justify-content-center m-0 article-row align-items-center">
          <Col md={6} className="text-content animated-left">
            <p className='section-content'>{articolo1015.Contenuto}</p>
          </Col>
          <Col md={6} className="image-content animated-right">
            <div className="image-circle" style={{ backgroundImage: `url(${Filiera3})` }}></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Filiera;
