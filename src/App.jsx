import React from 'react';
import { Router } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Projeto from './pages/projeto';
import Simulacao from './pages/simulacao';
import Hardware from './pages/hardware';

import Equipe from './pages/equipe';
import './App.css';


export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/simulacao" element={<Simulacao />} />
            <Route path="/hardware" element={<Hardware />} />
            {/* <Route path="/software" element={<Software />} />
            <Route path="/perguntas" element={<Perguntas />} />
            <Route path="/resultados" element={<Resultados />} />*/}
            <Route path="/equipe" element={<Equipe />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
  );
}
export default AppRouter;