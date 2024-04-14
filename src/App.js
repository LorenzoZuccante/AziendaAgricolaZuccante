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
        <Route path="/modifica-articolo" element={<PrivateRoute component={ModificaArticolo} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
