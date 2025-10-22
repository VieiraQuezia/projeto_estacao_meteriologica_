import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projeto from './pages/projeto';
import Simulacao from './pages/simulacao';
import './App.css';
import { Router } from 'lucide-react';

export function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-main">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/simulacao" element={<Simulacao />} />
            {/* <Route path="/hardware" element={<Hardware />} />
            <Route path="/software" element={<Software />} />
            <Route path="/perguntas" element={<Perguntas />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/equipe" element={<Equipe />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
      </BrowserRouter>
  );
}
export default AppRouter;