import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModificaArticolo.css'

const ModificaArticolo = () => {
    const [articoli, setArticoli] = useState([]);
    const [selectedArticolo, setSelectedArticolo] = useState(null);
    const navigate = useNavigate();

    
    useEffect(() => {
        fetch('https://localhost:44309/api/articoli')
            .then(response => response.json())
            .then(data => setArticoli(data))
            .catch(error => console.error('Error fetching articoli:', error));
    }, []);

    const handleSelectChange = (event) => {
        const articoloId = event.target.value;
        const articolo = articoli.find(art => art.ArticoloID === parseInt(articoloId));
        setSelectedArticolo(articolo);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedArticolo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (selectedArticolo) {
            fetch(`https://localhost:44309/api/articoli/${selectedArticolo.ArticoloID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedArticolo)
            })
            .then(response => {
                if (response.ok) {
                    alert('Articolo salvato con successo!');
                } else {
                    alert('Errore durante il salvataggio dell\'articolo');
                    return response.json().then(data => {
                        throw new Error(data.message || 'Errore sconosciuto');
                    });
                }
            })
            .catch(error => {
                console.error('Errore durante il salvataggio:', error);
                alert(error.message);
            });
        } else {
            alert('Nessun articolo selezionato per il salvataggio');
        }
    };
    const handleDelete = () => {
        if (selectedArticolo && window.confirm('Sei sicuro di voler eliminare questo articolo?')) {
            fetch(`https://localhost:44309/api/articoli/${selectedArticolo.ArticoloID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Articolo eliminato con successo!');
                    
                    setArticoli(prevArticoli => prevArticoli.filter(art => art.ArticoloID !== selectedArticolo.ArticoloID));
                    setSelectedArticolo(null);
                } else {
                    alert('Errore durante l\'eliminazione dell\'articolo');
                    return response.json().then(data => {
                        throw new Error(data.message || 'Errore sconosciuto');
                    });
                }
            })
            .catch(error => {
                console.error('Errore durante l\'eliminazione:', error);
                alert(error.message);
            });
        }
    };
        

    const handleNewArticle = () => {
        navigate('/crea-articolo');
    };

    return (
        <div className="container mt-5 firstdiv">
        <div className="form-group">
            <label htmlFor="selectArticolo">Seleziona un articolo</label>
            <select id="selectArticolo" className="form-control" onChange={handleSelectChange} value={selectedArticolo?.ArticoloID || ''}>
            <option value="" disabled>Seleziona un articolo</option> 
                {articoli.map(art => (
                    <option key={art.ArticoloID} value={art.ArticoloID}>{art.Titolo}</option>
                ))}
            </select>
        </div>
        <div className="form-group mt-3">
            <label htmlFor="contentArea">Contenuto dell'articolo</label>
            <textarea id="contentArea" className="form-control" rows="5" value={selectedArticolo?.Contenuto || ''} onChange={(e) => setSelectedArticolo({...selectedArticolo, Contenuto: e.target.value})}></textarea>
        </div>
        <div className="form-group mt-3">
                <label htmlFor="statoArticolo">Stato dell'articolo</label>
                <input type="text" id="statoArticolo" className="form-control" value={selectedArticolo?.Stato || ''} onChange={handleInputChange} name="Stato" />
            </div>
        <div className="mt-3">
            <button className="btn btn-primary  m-3" onClick={handleSave}>Salva Modifiche</button>
            <button className="btn btn-danger  m-3" onClick={handleDelete}>Rimuovi Articolo</button>
            <button className="btn btn-success m-3" onClick={handleNewArticle}>Crea Nuovo Articolo</button>
        </div>
    </div>
    );
};

export default ModificaArticolo;
