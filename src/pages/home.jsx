import React from 'react';
import { CloudIcon, BookOpen, Network, Code, FileText } from 'lucide-react';
import './css/home.css';

export default function Home() {
  return (
    <div className="pagina-principal">
      <section className="hero-banner">
        <div className="container">
          <CloudIcon className="hero-icone" />
          <h1>Estação Meteorológica IoT</h1>
          <p>
            Monitoramento inteligente de temperatura, umidade e qualidade do ar usando ESP32 e MQTT
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2>Objetivo do Projeto</h2>
          <div className="objetivo-bloco">
            <p>
              Criar uma estação meteorológica compacta usando apenas um **ESP32** para ler sensores de temperatura/umidade (
              **DHT11 a 3V**) e qualidade do ar (**MQ-135 a 5V**), controlar LEDs de status e alerta, e publicar
              os dados via Wi-Fi em um servidor **Mosquitto** para visualização em um cliente MQTT no celular.
            </p>
          </div>

          <div className="imagens-grid">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
              alt="Estação Meteorológica"
            />
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
              alt="IoT Technology"
            />
          </div>

          <h2>Integração Multidisciplinar</h2>

          <div className="cards-disciplinares">
            <div className="card-disciplina">
              <BookOpen />
              <h3>Sistemas Operacionais</h3>
              <p>Gerenciamento de processos e comunicação do ESP32</p>
            </div>
            <div className="card-disciplina">
              <Network />
              <h3>Arquitetura de Redes e IoT</h3>
              <p>Protocolo MQTT e comunicação Wi-Fi</p>
            </div>
            <div className="card-disciplina">
              <Code />
              <h3>Lógica de Programação</h3>
              <p>Algoritmos de leitura e processamento de dados</p>
            </div>
            <div className="card-disciplina">
              <FileText />
              <h3>Levantamento de Requisitos</h3>
              <p>Análise de necessidades e especificações</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}