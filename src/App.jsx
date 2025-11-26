// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      {}
      <Header /> 
      
      {}
      <main className="container my-5">
        <Routes>

        </Routes>
      </main>
      

      <Footer />
    </BrowserRouter>
  );
}

export default App;