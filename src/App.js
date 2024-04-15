import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import '../src/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ModificaArticolo from './modificaarticolo/ModificaArticolo';
import CreaArticolo from './components/creaarticolo/CreaArticolo';
import GestioneColture from './components/gestionecolture/GestioneColture';
import CreaColtura from './creacoltura/CreaColtura';
import GestionePrevisioni from './components/gestioneprevisoni/GestionePrevisioni';
import CreaPrevisione from './components/creaprevisone/CreaPrevisione';
import GestioneSviluppo from './components/gestionesviluppo/GestioneSviluppo';
import CreaSviluppo from './components/creasviluppo/CreaSviluppo';
import GestioneProduzioni from './components/gestioneproduzioni/GestioneProduzioni';
import CreaProduzione from './components/creaproduzione/CreaProduzione';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navigationbar isAuthenticated={isAuthenticated} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} isAuthenticated={isAuthenticated} />} />
        <Route path="/gestione-articolo" element={<PrivateRoute component={ModificaArticolo} />} />
        <Route path="/crea-articolo" element={<PrivateRoute component={CreaArticolo} />} />
        <Route path="/gestione-colture" element={<PrivateRoute component={GestioneColture} />} />
        <Route path="/crea-coltura" element={<PrivateRoute component={CreaColtura} />} />
        <Route path="/gestione-previsoni" element={<PrivateRoute component={GestionePrevisioni} />} />
        <Route path="/crea-previsone" element={<PrivateRoute component={CreaPrevisione} />} />
        <Route path="/gestione-sviluppo" element={<PrivateRoute component={GestioneSviluppo} />} />
        <Route path="/crea-sviluppo" element={<PrivateRoute component={CreaSviluppo} />} />
        <Route path="/gestione-produzioni" element={<PrivateRoute component={GestioneProduzioni} />} />
        <Route path="/crea-produzione" element={<PrivateRoute component={CreaProduzione} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
