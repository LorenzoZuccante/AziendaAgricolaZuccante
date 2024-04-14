import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
