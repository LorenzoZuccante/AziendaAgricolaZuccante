import './CreaArticolo.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreaArticolo = () => {
    const [titolo, setTitolo] = useState('');
    const [contenuto, setContenuto] = useState('');
    const [stato, setStato] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const articolo = { titolo, contenuto, stato };

        fetch('https://localhost:44309/api/articoli', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articolo)
        })
        .then(response => {
            if (response.ok) {
                alert('Articolo creato con successo!');
                navigate('/gestione-articolo');
            } else {
                alert('Errore nella creazione dell\'articolo');
                return response.json().then(data => {
                    throw new Error(data.message || 'Errore sconosciuto');
                });
            }
        })
        .catch(error => {
            console.error('Errore durante la creazione:', error);
            alert(error.message);
        });
    };

    return (
        <div className="container mt-5 secondiv">
            <h2>Crea un nuovo articolo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titolo">Titolo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titolo"
                        value={titolo}
                        onChange={(e) => setTitolo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contenuto">Contenuto</label>
                    <textarea
                        className="form-control"
                        id="contenuto"
                        rows="5"
                        value={contenuto}
                        onChange={(e) => setContenuto(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="stato">Stato</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stato"
                        value={stato}
                        onChange={(e) => setStato(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Crea Articolo</button>
            </form>
        </div>
    );
};

export default CreaArticolo;
