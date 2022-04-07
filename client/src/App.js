import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Header from './components/Header';
import Navbar from './components/Navbar';
import Inscription from './pages/Inscription';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'/>
        <Route path='/inscription' element={<Inscription/>}/>
      </Routes>
    </Router>
  );
}

export default App;