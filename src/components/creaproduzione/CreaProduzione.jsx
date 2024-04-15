import './CreaProduzione.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const CreaProduzione = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [durataPeriodoProduttivo, setDurataPeriodoProduttivo] = useState('');
    const [brixMedioStagionale, setBrixMedioStagionale] = useState('');
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
        const newProduzione = {
            ColturaID: selectedColturaId,
            DurataPeriodoProduttivo: durataPeriodoProduttivo,
            BrixMedioStagionale: brixMedioStagionale
        };

        fetch('https://localhost:44309/api/produzioni', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduzione)
        })
        .then(response => {
            if (response.ok) {
                alert('Produzione creata con successo!');
                navigate('/gestione-produzioni');
            } else {
                throw new Error('Errore nella creazione della produzione');
            }
        })
        .catch(error => {
            console.error('Errore durante la creazione della produzione:', error);
            setError('Errore durante la creazione della produzione');
        });
    };

    return (
        <Container className="mt-5 tendiv">
            <h2>Crea una nuova Produzione</h2>
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
                <Form.Group controlId="durataPeriodoProduttivo">
                    <Form.Label>Durata Periodo Produttivo</Form.Label>
                    <Form.Control type="text" value={durataPeriodoProduttivo} onChange={e => setDurataPeriodoProduttivo(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="brixMedioStagionale">
                    <Form.Label>Brix Medio Stagionale</Form.Label>
                    <Form.Control type="text" value={brixMedioStagionale} onChange={e => setBrixMedioStagionale(e.target.value)} />
                </Form.Group>
                <Button variant="primary mt-3" type="submit">Crea Produzione</Button>
            </Form>
        </Container>
    );
};

export default CreaProduzione;
