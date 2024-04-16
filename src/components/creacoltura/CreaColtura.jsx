import './CreaColtura.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreaColtura = () => {
    const [coltura, setColtura] = useState({
        Nome: '',
        NomeScientifico: '',
        Famiglia: '',
        BrixMedio: '',
        Calibro: '',
        Origine: '',
        Produzione: '',
        Confenzionamento: '',
        Stato: '',
        ColturaImg: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setColtura(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://localhost:44309/api/colture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(coltura)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            alert('Coltura creata con successo!');
            navigate('/gestione-colture');
        })
        .catch(error => {
            alert('Errore durante la creazione della coltura: ' + error.message);
        });
    };

    return (
        <div className="container mt-5 fourdiv">
            <h2>Aggiungi una nuova Coltura</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" name="Nome" value={coltura.Nome} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Nome Scientifico</label>
                    <input type="text" className="form-control" name="NomeScientifico" value={coltura.NomeScientifico} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Famiglia</label>
                    <input type="text" className="form-control" name="Famiglia" value={coltura.Famiglia} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Brix Medio</label>
                    <input type="text" className="form-control" name="BrixMedio" value={coltura.BrixMedio} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Calibro</label>
                    <input type="text" className="form-control" name="Calibro" value={coltura.Calibro} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Origine</label>
                    <input type="text" className="form-control" name="Origine" value={coltura.Origine} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Produzione</label>
                    <input type="text" className="form-control" name="Produzione" value={coltura.Produzione} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Confezionamento</label>
                    <input type="text" className="form-control" name="Confenzionamento" value={coltura.Confenzionamento} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Stato</label>
                    <input type="text" className="form-control" name="Stato" value={coltura.Stato} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Immagine Coltura (URL)</label>
                    <input type="text" className="form-control" name="ColturaImg" value={coltura.ColturaImg} onChange={handleChange} placeholder="Inserisci URL immagine" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Crea Coltura</button>
            </form>
        </div>
    );
};

export default CreaColtura;
