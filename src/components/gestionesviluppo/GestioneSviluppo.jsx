import './GestioneSviluppo.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const GestioneSviluppo = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [sviluppi, setSviluppi] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44309/api/colture')
            .then(response => response.json())
            .then(data => setColture(data))
            .catch(error => console.error('Errore nel caricamento delle colture:', error));
    }, []);

    useEffect(() => {
        if (selectedColturaId) {
            fetch(`https://localhost:44309/api/sviluppi/ByColtura/${selectedColturaId}`)
                .then(response => response.json())
                .then(data => setSviluppi(data))
                .catch(error => console.error('Errore nel caricamento degli sviluppi:', error));
        } else {
            setSviluppi([]);
        }
    }, [selectedColturaId]);

    const handleColturaChange = (event) => {
        setSelectedColturaId(event.target.value);
    };

    const handleInputChange = (sviluppoId, field, value) => {
        setSviluppi(prevSviluppi => prevSviluppi.map(s => {
            if (s.SviluppoID === sviluppoId) {
                return { ...s, [field]: value };
            }
            return s;
        }));
    };

    const handleSaveChanges = (sviluppo) => {
        fetch(`https://localhost:44309/api/sviluppi/${sviluppo.SviluppoID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sviluppo)
        })
        .then(response => {
            if (!response.ok) throw new Error('Errore nella risposta del network.');
            alert('Sviluppo aggiornato con successo!');
        })
        .catch(error => alert("Errore durante l'aggiornamento dello sviluppo: " + error.message));
    };

    const handleDeleteSviluppo = (sviluppoId) => {
        if (window.confirm('Sei sicuro di voler eliminare questo sviluppo?')) {
            fetch(`https://localhost:44309/api/sviluppi/${sviluppoId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                if (!response.ok) throw new Error('Errore nella risposta del network.');
                setSviluppi(sviluppi.filter(s => s.SviluppoID !== sviluppoId));
                alert('Sviluppo eliminato con successo!');
            })
            .catch(error => alert("Errore durante l'eliminazione dello sviluppo: " + error.message));
        }
    };

    const handleAddNew = () => {
        navigate('/crea-sviluppo');
    };

    return (
        <div className="container mt-5 seventhdiv">
            <h2>Gestione dello Sviluppo delle Colture</h2>
            <Form.Group>
                <Form.Label>Seleziona Coltura</Form.Label>
                <Form.Control as="select" value={selectedColturaId} onChange={handleColturaChange}>
                    <option value="">Seleziona una coltura</option>
                    {colture.map(c => (
                        <option key={c.ColturaID} value={c.ColturaID}>{c.Nome}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            {sviluppi.map(sviluppo => (
                <Card key={sviluppo.SviluppoID} className="mb-3">
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Acqua Risparmiata per Ha</Form.Label>
                            <Form.Control
                                type="text"
                                value={sviluppo.AcquaRisPha || ''}
                                onChange={(e) => handleInputChange(sviluppo.SviluppoID, 'AcquaRisPha', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stima Prima Raccolta</Form.Label>
                            <Form.Control
                                type="date"
                                value={sviluppo.StimaPrimaRaccolta ? sviluppo.StimaPrimaRaccolta.split('T')[0] : ''}
                                onChange={(e) => handleInputChange(sviluppo.SviluppoID, 'StimaPrimaRaccolta', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Periodo Produttivo</Form.Label>
                            <Form.Control
                                type="text"
                                value={sviluppo.PeriodoProduttivo || ''}
                                onChange={(e) => handleInputChange(sviluppo.SviluppoID, 'PeriodoProduttivo', e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" className='m-3' onClick={() => handleSaveChanges(sviluppo)}>Salva Modifiche</Button>
                        <Button variant="danger" className='m-3' onClick={() => handleDeleteSviluppo(sviluppo.SviluppoID)}>Elimina</Button>
                    </Card.Body>
                </Card>
            ))}
            <Button variant="primary mt-3" onClick={handleAddNew}>Aggiungi Nuovo Sviluppo</Button>
        </div>
    );
};

export default GestioneSviluppo;
