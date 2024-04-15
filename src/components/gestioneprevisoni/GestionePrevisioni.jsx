import './GestionePrevisioni.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

const GestionePrevisioni = () => {
    const [colture, setColture] = useState([]);
    const [selectedColturaId, setSelectedColturaId] = useState('');
    const [previsioni, setPrevisioni] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44309/api/colture')
            .then(response => response.json())
            .then(data => setColture(data))
            .catch(error => console.error('Errore nel caricamento delle colture:', error));
    }, []);

    useEffect(() => {
        if (selectedColturaId) {
            fetch(`https://localhost:44309/api/previsioni/ByColtura/${selectedColturaId}`)
                .then(response => response.json())
                .then(data => setPrevisioni(data))
                .catch(error => console.error('Errore nel caricamento delle previsioni:', error));
        } else {
            setPrevisioni([]);
        }
    }, [selectedColturaId]);

    const handleColturaChange = (event) => {
        setSelectedColturaId(event.target.value);
    };

    const handleInputChange = (previsioneId, field, value) => {
        setPrevisioni(prevPrevisioni => prevPrevisioni.map(p => {
            if (p.PrevisioneID === previsioneId) {
                return { ...p, [field]: value };
            }
            return p;
        }));
    };

    const handleSaveChanges = (previsione) => {
        fetch(`https://localhost:44309/api/previsioni/${previsione.PrevisioneID}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(previsione)
        })
        .then(response => {
            if (!response.ok) throw new Error('Errore nella risposta del network.');
            alert('Previsione aggiornata con successo!');
        })
        .catch(error => alert("Errore durante l'aggiornamento della previsione: " + error.message));
    };

    const handleDeletePrevisione = (previsioneId) => {
        if (window.confirm('Sei sicuro di voler eliminare questa previsione?')) {
            fetch(`https://localhost:44309/api/previsioni/${previsioneId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                if (!response.ok) throw new Error('Errore nella risposta del network.');
                setPrevisioni(previsioni.filter(p => p.PrevisioneID !== previsioneId));
                alert('Previsione eliminata con successo!');
            })
            .catch(error => alert("Errore durante l'eliminazione della previsione: " + error.message));
        }
    };

    const handleAddNew = () => {
        navigate('/crea-previsione');
    };

    return (
        <div className="container mt-5 fifthdiv">
            <h2>Gestione delle Previsioni</h2>
            <Form.Group>
                <Form.Label>Seleziona Coltura</Form.Label>
                <Form.Control as="select" value={selectedColturaId} onChange={handleColturaChange}>
                    <option value="">Seleziona una coltura</option>
                    {colture.map(c => (
                        <option key={c.ColturaID} value={c.ColturaID}>{c.Nome}</option>
                    ))}
                </Form.Control>
            </Form.Group>
            {previsioni.map(previsione => (
                <Card key={previsione.PrevisioneID} className="mb-3">
                    <Card.Body>
                        <Form.Group>
                            <Form.Label>Stima Trapianti Ha</Form.Label>
                            <Form.Control
                                type="text"
                                value={previsione.StimaTrapiantiHa || ''}
                                onChange={(e) => handleInputChange(previsione.PrevisioneID, 'StimaTrapiantiHa', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Stima Media Qha</Form.Label>
                            <Form.Control
                                type="text"
                                value={previsione.StimaMediaQha || ''}
                                onChange={(e) => handleInputChange(previsione.PrevisioneID, 'StimaMediaQha', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Anno Stima</Form.Label>
                            <Form.Control
                                type="text"
                                value={previsione.AnnoStima || ''}
                                onChange={(e) => handleInputChange(previsione.PrevisioneID, 'AnnoStima', e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" className='m-3' onClick={() => handleSaveChanges(previsione)}>Salva Modifiche</Button>
                        <Button variant="danger" className='m-3' onClick={() => handleDeletePrevisione(previsione.PrevisioneID)}>Elimina</Button>
                    </Card.Body>
                </Card>
            ))}
            <Button variant="primary mt-3" onClick={handleAddNew}>Aggiungi Nuova Previsione</Button>
        </div>
    );
};

export default GestionePrevisioni;



