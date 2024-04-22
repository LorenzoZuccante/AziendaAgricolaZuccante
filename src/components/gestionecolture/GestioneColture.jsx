import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GestioneColture.css';

const GestioneColture = () => {
    const [colture, setColture] = useState([]);
    const [selectedColtura, setSelectedColtura] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44309/api/colture')
            .then(response => response.json())
            .then(data => setColture(data))
            .catch(error => console.error('Error fetching colture:', error));
    }, []);

    const handleSelectChange = (event) => {
        const colturaId = parseInt(event.target.value);
        const coltura = colture.find(c => c.ColturaID === colturaId);
        setSelectedColtura(coltura);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedColtura(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        if (selectedColtura) {
            fetch(`https://localhost:44309/api/colture/${selectedColtura.ColturaID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedColtura)
            })
            .then(response => {
                if (response.ok) {
                    alert('Coltura aggiornata con successo!');
                } else {
                    alert('Errore durante l\'aggiornamento della coltura');
                }
            })
            .catch(error => {
                alert('Errore durante l\'aggiornamento della coltura: ' + error.message);
            });
        } else {
            alert('Nessuna coltura selezionata per il salvataggio');
        }
    };

    const handleDelete = () => {
        if (selectedColtura && window.confirm('Sei sicuro di voler eliminare questa coltura?')) {
            fetch(`https://localhost:44309/api/colture/${selectedColtura.ColturaID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Coltura eliminata con successo!');
                    setColture(colture.filter(c => c.ColturaID !== selectedColtura.ColturaID));
                    setSelectedColtura(null);
                } else {
                    alert('Errore durante l\'eliminazione della coltura');
                }
            })
            .catch(error => {
                alert('Errore durante l\'eliminazione della coltura: ' + error.message);
            });
        }
    };

    const handleAddNew = () => {
        navigate('/crea-coltura');
    };

    return (
        <div className="container mt-5 terdiv">
            <h1>Gestione Colture</h1>
            <div className="form-group">
                <label htmlFor="selectColtura">Seleziona una Coltura</label>
                <select id="selectColtura" className="form-control" onChange={handleSelectChange} value={selectedColtura?.ColturaID || ''}>
                    <option value="">Seleziona una coltura</option>
                    {colture.map(c => (
                        <option key={c.ColturaID} value={c.ColturaID}>{c.Nome}</option>
                    ))}
                </select>
            </div>
            {selectedColtura && (
                <div>
                    <div className="form-group">
                        <label>Nome Scientifico</label>
                        <input className="form-control" type="text" name="NomeScientifico" value={selectedColtura.NomeScientifico || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Famiglia</label>
                        <input className="form-control" type="text" name="Famiglia" value={selectedColtura.Famiglia || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Brix Medio</label>
                        <input className="form-control" type="text" name="BrixMedio" value={selectedColtura.BrixMedio || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Calibro</label>
                        <input className="form-control" type="text" name="Calibro" value={selectedColtura.Calibro || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Origine</label>
                        <input className="form-control" type="text" name="Origine" value={selectedColtura.Origine || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Produzione</label>
                        <input className="form-control" type="text" name="Produzione" value={selectedColtura.Produzione || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Confezionamento</label>
                        <input className="form-control" type="text" name="Confenzionamento" value={selectedColtura.Confenzionamento || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Stato</label>
                        <input className="form-control" type="text" name="Stato" value={selectedColtura.Stato || ''} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Coltura Img</label>
                        <input className="form-control" type="text" name="ColturaImg" value={selectedColtura.ColturaImg || ''} onChange={handleInputChange} />
                    </div>
                    <button className="btn btn-primary m-3" onClick={handleSaveChanges}>Salva Modifiche</button>
                    <button className="btn btn-danger m-3" onClick={handleDelete}>Elimina Coltura</button>
                    <button className="btn btn-success m-3" onClick={handleAddNew}>Aggiungi Coltura</button>
                </div>
            )}
        </div>
    );
};

export default GestioneColture;
