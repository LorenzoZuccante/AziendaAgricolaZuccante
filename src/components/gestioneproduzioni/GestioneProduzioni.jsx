import './GestioneProduzioni.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const GestioneProduzioni = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [produzioni, setProduzioni] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44309/api/colture')
            .then(response => response.json())
            .then(data => setColture(data))
            .catch(error => console.error('Errore nel caricamento delle colture:', error));
    }, []);

    useEffect(() => {
        if (selectedColturaId) {
            fetch(`https://localhost:44309/api/produzioni/ByColtura/${selectedColturaId}`)
                .then(response => response.json())
                .then(data => setProduzioni(data))
                .catch(error => console.error('Errore nel caricamento delle produzioni:', error));
        } else {
            setProduzioni([]);
        }
    }, [selectedColturaId]);

    const handleColturaChange = (event) => {
        setSelectedColturaId(event.target.value);
    };

    const handleInputChange = (produzioneId, field, value) => {
        setProduzioni(prevProduzioni => prevProduzioni.map(prod => {
            if (prod.ProduzioneID === produzioneId) {
                return { ...prod, [field]: value };
            }
            return prod;
        }));
    };

    const handleSaveChanges = (produzione) => {
        fetch(`https://localhost:44309/api/produzioni/${produzione.ProduzioneID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produzione)
        })
        .then(response => {
            if (!response.ok) throw new Error('Errore nella risposta del network.');
            alert('Produzione aggiornata con successo!');
        })
        .catch(error => alert("Errore durante l'aggiornamento della produzione: " + error.message));
    };

    const handleDeleteProduzione = (produzioneId) => {
        if (window.confirm('Sei sicuro di voler eliminare questa produzione?')) {
            fetch(`https://localhost:44309/api/produzioni/${produzioneId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                if (!response.ok) throw new Error('Errore nella risposta del network.');
                setProduzioni(produzioni.filter(p => p.ProduzioneID !== produzioneId));
                alert('Produzione eliminata con successo!');
            })
            .catch(error => alert("Errore durante l'eliminazione della produzione: " + error.message));
        }
    };

    const handleAddNew = () => {
        navigate('/crea-produzione');
    };

    return (
        <div className="container mt-5 ninediv">
            <h2>Gestione delle Produzioni</h2>
            <Form.Group>
                <Form.Label>Seleziona Coltura</Form.Label>
                <Form.Control as="select" value={selectedColturaId} onChange={handleColturaChange}>
                    <option value="">Seleziona una coltura</option>
                    {colture.map(c => (
                        <option key={c.ColturaID} value={c.ColturaID}>{c.Nome}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            {produzioni.map(produzione => (
                <Card key={produzione.ProduzioneID} className="mb-3">
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Durata Periodo Produttivo</Form.Label>
                            <Form.Control
                                type="text"
                                value={produzione.DurataPeriodoProduttivo || ''}
                                onChange={(e) => handleInputChange(produzione.ProduzioneID, 'DurataPeriodoProduttivo', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brix Medio Stagionale</Form.Label>
                            <Form.Control
                                type="text"
                                value={produzione.BrixMedioStagionale || ''}
                                onChange={(e) => handleInputChange(produzione.ProduzioneID, 'BrixMedioStagionale', e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" className='m-3' onClick={() => handleSaveChanges(produzione)}>Salva Modifiche</Button>
                        <Button variant="danger" className='m-3' onClick={() => handleDeleteProduzione(produzione.ProduzioneID)}>Elimina</Button>
                    </Card.Body>
                </Card>
            ))}
            <Button variant="primary mt-3" onClick={handleAddNew}>Aggiungi Nuova Produzione</Button>
        </div>
    );
};

export default GestioneProduzioni;
