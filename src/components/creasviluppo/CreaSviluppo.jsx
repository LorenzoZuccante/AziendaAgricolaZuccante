import './CreaSviluppo.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const CreaSviluppo = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [acquaRisPha, setAcquaRisPha] = useState('');
    const [stimaPrimaRaccolta, setStimaPrimaRaccolta] = useState('');
    const [periodoProduttivo, setPeriodoProduttivo] = useState('');
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
        const newSviluppo = {
            ColturaID: selectedColturaId,
            AcquaRisPha: acquaRisPha,
            StimaPrimaRaccolta: stimaPrimaRaccolta,
            PeriodoProduttivo: periodoProduttivo
        };

        fetch('https://localhost:44309/api/sviluppi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSviluppo)
        })
        .then(response => {
            if (response.ok) {
                alert('Sviluppo creato con successo!');
                navigate('/gestione-sviluppo');
            } else {
                throw new Error('Errore nella creazione dello sviluppo');
            }
        })
        .catch(error => {
            console.error('Errore durante la creazione dello sviluppo:', error);
            setError('Errore durante la creazione dello sviluppo');
        });
    };

    return (
        <Container className="mt-5 ottdiv">
            <h2>Crea un nuovo Sviluppo</h2>
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
                <Form.Group controlId="acquaRisPha">
                    <Form.Label>Acqua Risparmiata per Ha</Form.Label>
                    <Form.Control type="text" value={acquaRisPha} onChange={e => setAcquaRisPha(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="stimaPrimaRaccolta">
                    <Form.Label>Stima Prima Raccolta</Form.Label>
                    <Form.Control type="date" value={stimaPrimaRaccolta} onChange={e => setStimaPrimaRaccolta(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="periodoProduttivo">
                    <Form.Label>Periodo Produttivo</Form.Label>
                    <Form.Control type="text" value={periodoProduttivo} onChange={e => setPeriodoProduttivo(e.target.value)} />
                </Form.Group>
                <Button variant="primary mt-3" type="submit">Crea Sviluppo</Button>
            </Form>
        </Container>
    );
};

export default CreaSviluppo;
