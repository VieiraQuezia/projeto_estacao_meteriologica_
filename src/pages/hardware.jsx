import React from 'react';
import { Cpu, Thermometer, Wind, Zap, Cable } from 'lucide-react';
import './css/hardware.css';

export default function Hardware() {
  const components = [
    {
      name: 'ESP32',
      icon: Cpu,
      desc: 'Microcontrolador com Wi-Fi e Bluetooth integrados, responsável pelo processamento e comunicação dos dados.',
      img: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?w=400&h=300&fit=crop',
      color: 'text-blue-600',
    },
    {
      name: 'Sensor DHT11',
      icon: Thermometer,
      desc: 'Sensor digital de temperatura e umidade, operando a 3V, com precisão adequada para monitoramento ambiental.',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      color: 'text-sky-500',
    },
    {
      name: 'Sensor MQ-135',
      icon: Wind,
      desc: 'Sensor de qualidade do ar capaz de detectar gases nocivos como CO2, amônia, benzeno e fumaça, operando a 5V.',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      color: 'text-indigo-600',
    },
    {
      name: 'LEDs',
      icon: Zap,
      desc: 'LEDs indicadores para status do sistema (verde) e alertas de qualidade do ar (vermelho/amarelo).',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      color: 'text-yellow-500',
    },
    {
      name: 'Resistores',
      icon: Cable,
      desc: 'Resistores de limitação de corrente para proteção dos LEDs e estabilização do circuito.',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      color: 'text-gray-500',
    },
    {
      name: 'Protoboard e Jumpers',
      icon: Cable,
      desc: 'Protoboard para montagem do circuito e jumpers para conexões entre os componentes.',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      color: 'text-green-500',
    },
  ];

  return (
    <section className="hardware">
      <h1 className="title">Hardware</h1>

      <div className="grid">
        {components.map(({ name, desc, img, icon: color }, i) => (
          <article key={i} className="card">
            <img src={img} alt={name} className="card-img" />
            <div className="card-body">
              <header className="card-head">
                <Icon className={`icon ${color}`} />
                <h3>{name}</h3>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="specs">
        <h2>Especificações Técnicas</h2>
        <div className="specs-grid">
          <div>
            <h3>Alimentação</h3>
            <ul>
              <li>ESP32: 3.3V (via USB ou regulador)</li>
              <li>DHT11: 3V</li>
              <li>MQ-135: 5V</li>
              <li>LEDs: 3.3V com resistores limitadores</li>
            </ul>
          </div>
          <div>
            <h3>Comunicação</h3>
            <ul>
              <li>Wi-Fi 802.11 b/g/n</li>
              <li>Protocolo MQTT</li>
              <li>Porta serial para debug</li>
              <li>GPIO para controle de LEDs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
