import React, { useState } from "react";
// Importar useLocation do react-router-dom
import { Menu, X, CloudIcon } from "lucide-react";
import { useLocation } from "react-router-dom"; // Importe esta linha
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  // Obter o caminho atual da URL
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projeto", label: "O Projeto" },
    { path: "/simulacao", label: "Simulação Wokwi" },
    { path: "/hardware", label: "Hardware" },
    { path: "/software", label: "Software" },
    { path: "/perguntas", label: "Perguntas e Respostas" },
    { path: "/resultados", label: "Resultados" },
    { path: "/equipe", label: "Equipe" },
  ];

  return (
    <header className="header" style={{ background: "#222", color: "#fff" }}>
      <div className="header-inner">
        <div className="header-logo">
          <CloudIcon />
          <h1 style={{ margin: 0 }}>Estação Meteorológica</h1>
        </div>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {navItems.map((item) => {
            // Verifica se o caminho do item é o caminho atual
            const isActive = item.path === currentPath;

            return (
              // Aplica a classe 'active-link' se for o item ativo
              <a
                key={item.path}
                href={item.path}
                className={isActive ? "active-link" : ""}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile" role="menu">
          {navItems.map((item) => {
            const isActive = item.path === currentPath;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={isActive ? "active-link" : ""}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}