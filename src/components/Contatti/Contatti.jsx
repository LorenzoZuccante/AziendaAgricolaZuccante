import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Contatti.css'

const Contatti = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://localhost:44309/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, body: message })
      });

      if (!response.ok) throw new Error('Errore nell\'invio dell\'email');
      setSuccess('Email inviata con successo!');
    } catch (error) {
      setError('Errore nell\'invio: ' + error.message);
    }
  };

  return (
    <Container className='ciao'>
      <h1>Contattaci</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
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
            placeholder="Scrivi il tuo messaggio"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia Email
        </Button>
      </Form>
    </Container>
  );
};

export default Contatti;
