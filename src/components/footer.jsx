import React from 'react';
import { CloudIcon, Github, Linkedin, Mail } from 'lucide-react';
import './footer.css'; // Não se esqueça de importar o CSS

export default function Footer() {
  return (
    <footer className="project-footer">
      <div className="footer-content-wrapper">
        
        <div className="footer-top-section">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="footer-col">
            <div className="footer-logo-area">
              <CloudIcon />
              <p>Estação Meteorológica</p>
            </div>
            <p className="footer-description">
              Projeto acadêmico de uma estação meteorológica utilizando ESP32, sensores DHT11 e MQ-135, e protocolo MQTT.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="footer-col">
            <h3>Contato</h3>
            <div className="footer-contact-info">
              <p className="footer-detail">Instituição de Ensino</p>
              <p className="footer-detail">Curso de Tecnologia</p>
              <p className="footer-detail">contato@exemplo.com</p>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="footer-col">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a href="#" aria-label="Github"><Github /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:contato@exemplo.com" aria-label="Email"><Mail /></a>
            </div>
            <br />
                          <img src="/logo.png" alt="logo" />

          </div>
          
        </div>

        {/* Seção de Direitos Autorais */}
        <div className="footer-bottom-section">
          <p className="copyright-text">
            © 2024 Estação Meteorológica IoT. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}