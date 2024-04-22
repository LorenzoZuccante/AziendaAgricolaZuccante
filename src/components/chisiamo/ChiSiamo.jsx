import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ChiSiamo.css';
import img1 from '../../assets/chisiamoimg1.jpg';
import img2 from '../../assets/chisiamoimg2.jpg';

const ChiSiamo = () => {
  const [articolo1005, setArticolo1005] = useState({});
  const [articolo1013, setArticolo1013] = useState({});


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

    fetchArticolo(1005, setArticolo1005);
    fetchArticolo(1013, setArticolo1013);
  }, []);

  return (
    <Container fluid className="chi-siamo p-0">
      <div className='photoHolder1'><h1 className='text-center'>CHI SIAMO</h1></div>
  <div className='ciccio'>
        <Row className="justify-content-center m-0 article-row align-items-center">
          <Col md={6} className="text-content animated-left">
            <h2 className='h2iamo'>Un po' di noi...</h2>
            <p className='piamo'>{articolo1005.Contenuto}</p>
          </Col>
          <Col md={6} className="image-content order-md-last animated-right">
            <div className="image-circle" style={{ backgroundImage: `url(${img1})` }}></div>
          </Col>
        </Row>
        <Row className="justify-content-center m-0 article-row align-items-center">
          <Col md={6} className="text-content order-md-2 animated-right">
            <h2 className='h2iamo'>...</h2>
            <p className='piamo'>{articolo1013.Contenuto}</p>
          </Col>
          <Col md={6} className="image-content animated-left">
            <div className="image-circle rotatethis1" style={{ backgroundImage: `url(${img2})` }}></div>
          </Col>
        </Row>
  </div>
    </Container>
  );
};

export default ChiSiamo;
