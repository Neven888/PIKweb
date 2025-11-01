import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Home from './components/pages/Home';
import ONama from './components/pages/ONama';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nama" element={<ONama />} />
          </Routes>
        </main>
        <Footer />
      </div>  
    </Router>
  );
}

export default App;
