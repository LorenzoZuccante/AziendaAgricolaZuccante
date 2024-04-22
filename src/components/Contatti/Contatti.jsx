import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import './Contatti.css';
import { Navigate,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Contatti = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const url = new URL('https://localhost:44309/api/email/sendemail');
    url.searchParams.append('subject', subject);
    url.searchParams.append('text', message);

    try {
      const response = await fetch(url, { method: 'POST' });
      if (!response.ok) throw new Error('Errore nell\'invio dell\'email');
      setSuccess('Email inviata con successo!');
    } catch (error) {
      setError('Errore nell\'invio: ' + error.message);
    }
  };

  return (
    <>
    <Container className='backgroundiamo'>
    <Container ><h1 className="text-center mb-4 cont4">Contattaci</h1></Container>
    <Container className='contatti-container'>
      <Row className="align-items-center">
        <Col xs={12} lg={5} className="mb-4 mb-lg-0">
          <div className="contact-details quattro text-center">
            <h3>Dati di Contatto</h3>
            <p>Indirizzo: Via san carlo a Palidoro 170, 00054 Fiumicino, Italia</p>
            <p>Telefono: +39 366 319 5952</p>
            <p>Email: ortofrutta@aziendazuccante.org</p>
          </div>
        </Col>
        <Col xs={12} className="text-center mb-4 d-lg-none">
          
        </Col>
        <Col xs={12} lg={7}>
          <div className="email-form-container">
          <h3 className='cont3 text-center'>Inviaci una mail</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className='.nobg'>
                <Form.Label>Oggetto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Oggetto della email"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Scrivi il tuo messaggio.
                  Desideri essere ricontattato?
                  Lasciaci un tuo recapito. "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Check 
    type="checkbox" 
    label="Accetto le condizioni sulla privacy e autorizzo il trattamento dei miei dati personali secondo il GDPR." 
    required // La checkbox deve essere selezionata prima di poter inviare il modulo
  />
  <Form.Text className="text-muted quattro">
    Prima di procedere, leggi la nostra 
    <Link to="/privacy-policy" rel="noopener noreferrer">
   privacy policy
</Link>
  </Form.Text>
              <Button variant="primary" className='custom1button' type="submit">
                Invia Email
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </Container>
    </>
  );
};

export default Contatti;
