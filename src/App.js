import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import '../src/styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ModificaArticolo from './components/modificaarticolo/ModificaArticolo';
import CreaArticolo from './components/creaarticolo/CreaArticolo';
import GestioneColture from './components/gestionecolture/GestioneColture';
import CreaColtura from './components/creacoltura/CreaColtura';
import GestionePrevisioni from './components/gestioneprevisoni/GestionePrevisioni';
import CreaPrevisione from './components/creaprevisone/CreaPrevisione';
import GestioneSviluppo from './components/gestionesviluppo/GestioneSviluppo';
import CreaSviluppo from './components/creasviluppo/CreaSviluppo';
import GestioneProduzioni from './components/gestioneproduzioni/GestioneProduzioni';
import CreaProduzione from './components/creaproduzione/CreaProduzione';
import ChiSiamo from './components/chisiamo/ChiSiamo';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Filiera from './components/filiera/Filiera';
import Contatti from './components/Contatti/Contatti';
import Carciofo from './components/carciofo/Carciofo';
import Brassiche from './components/brassiche/Brassiche';
import Finocchio from './components/finocchio/Finocchio';
import Cocomero from './components/cocomero/Cocomero';
import Melone from './components/melone/Melone';
import Galleria from './components/galleria/Galleria';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';


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
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} isAuthenticated={isAuthenticated} />} />
        <Route path="/gestione-articolo" element={<PrivateRoute component={ModificaArticolo} />} />
        <Route path="/crea-articolo" element={<PrivateRoute component={CreaArticolo} />} />
        <Route path="/gestione-colture" element={<PrivateRoute component={GestioneColture} />} />
        <Route path="/crea-coltura" element={<PrivateRoute component={CreaColtura} />} />
        <Route path="/gestione-previsioni" element={<PrivateRoute component={GestionePrevisioni} />} />
        <Route path="/crea-previsione" element={<PrivateRoute component={CreaPrevisione} />} />
        <Route path="/gestione-sviluppo" element={<PrivateRoute component={GestioneSviluppo} />} />
        <Route path="/crea-sviluppo" element={<PrivateRoute component={CreaSviluppo} />} />
        <Route path="/gestione-produzioni" element={<PrivateRoute component={GestioneProduzioni} />} />
        <Route path="/crea-produzione" element={<PrivateRoute component={CreaProduzione} />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/filiera" element={<Filiera />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/carciofo" element={<Carciofo />} />
        <Route path="/brassicaceae" element={<Brassiche />} />
        <Route path="/finocchio" element={<Finocchio />} />
        <Route path="/cocomero" element={<Cocomero />} />
        <Route path="/melone" element={<Melone />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
