import './CreaPrevisione.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const CreaPrevisione = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [stimaTrapiantiHa, setStimaTrapiantiHa] = useState('');
    const [stimaMediaQha, setStimaMediaQha] = useState('');
    const [annoStima, setAnnoStima] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44309/api/colture')
            .then(response => response.json())
            .then(data => setColture(data))
            .catch(error => {
                console.error('Errore nel caricamento delle colture:', error);
                setError('Non è stato possibile caricare le colture');
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!selectedColturaId) {
            setError('Seleziona una coltura prima di procedere');
            return;
        }
        const newPrevisione = {
            ColturaID: selectedColturaId,
            StimaTrapiantiHa: stimaTrapiantiHa,
            StimaMediaQha: stimaMediaQha,
            AnnoStima: annoStima
        };

        fetch('https://localhost:44309/api/previsioni', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPrevisione)
        })
        .then(response => {
            if (response.ok) {
                alert('Previsione creata con successo!');
                navigate('/gestione-previsioni');
            } else {
                throw new Error('Errore nella creazione della previsione');
            }
        })
        .catch(error => {
            console.error('Errore durante la creazione della previsione:', error);
            setError('Errore durante la creazione della previsione');
        });
    };

    return (
        <Container className="mt-5 sixthdiv">
            <h2>Crea una nuova Previsione</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="colturaSelect">
                    <Form.Label>Seleziona Coltura</Form.Label>
                    <Form.Control as="select" value={selectedColturaId} onChange={e => setSelectedColturaId(e.target.value)}>
                        <option value="">Seleziona una coltura</option>
                        {colture.map(coltura => (
                            <option key={coltura.ColturaID} value={coltura.ColturaID}>{coltura.Nome}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="stimaTrapiantiHa">
                    <Form.Label>Stima Trapianti Ha</Form.Label>
                    <Form.Control type="text" value={stimaTrapiantiHa} onChange={e => setStimaTrapiantiHa(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="stimaMediaQha">
                    <Form.Label>Stima Media Qha</Form.Label>
                    <Form.Control type="text" value={stimaMediaQha} onChange={e => setStimaMediaQha(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="annoStima">
                    <Form.Label>Anno Stima</Form.Label>
                    <Form.Control type="text" value={annoStima} onChange={e => setAnnoStima(e.target.value)} />
                </Form.Group>
                <Button variant="primary mt-3" type="submit">Crea Previsione</Button>
            </Form>
        </Container>
    );
};

export default CreaPrevisione;


