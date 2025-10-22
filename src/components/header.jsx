import React, { useState } from "react";
import { Menu, X, CloudIcon } from "lucide-react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          {navItems.map((item) => (
            <a key={item.path} href={item.path}>
              <span>{item.label}</span>
            </a>
          ))}
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
          {navItems.map((item) => (
            <a key={item.path} href={item.path} onClick={() => setOpen(false)}>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
