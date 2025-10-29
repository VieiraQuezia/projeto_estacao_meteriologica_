import React from 'react';
import { Cpu, Thermometer, Wind, Zap, Cable } from 'lucide-react';
import './css/hardware.css';


export default function Hardware() {
  const components = [
    {
      name: 'ESP32',
      icon: Cpu,
      desc: 'Microcontrolador com Wi-Fi e Bluetooth integrados, responsável pelo processamento e comunicação dos dados.',
      img: '/esp32.jpg',
      color: 'text-blue-600',
    },
    {
      name: 'Sensor DHT11',
      icon: Thermometer,
      desc: 'Sensor digital de temperatura e umidade, operando a 3V, com precisão adequada para monitoramento ambiental.',
      img: '/dht11.jpg',
      color: 'text-sky-500',
    },
    {
      name: 'Sensor MQ-135',
      icon: Wind,
      desc: 'Sensor de qualidade do ar capaz de detectar gases nocivos como CO2, amônia, benzeno e fumaça, operando a 5V.',
      img: '/sensordegas.jpg',
      color: 'text-indigo-600',
    },
    {
      name: 'LEDs',
      icon: Zap,
      desc: 'LEDs indicadores para status do sistema (verde) e alertas de qualidade do ar (vermelho/amarelo).',
      img: 'leds.jpg',
      color: 'text-yellow-500',
    },
    {
      name: 'Resistores',
      icon: Cable,
      desc: 'Resistores de limitação de corrente para proteção dos LEDs e estabilização do circuito.',
      img: '/resistores.jpg',
      color: 'text-gray-500',
    },
    {
      name: 'Protoboard e Jumpers',
      icon: Cable,
      desc: 'Protoboard para montagem do circuito e jumpers para conexões entre os componentes.',
      img: '/protoboard.jpg',
      color: 'text-green-500',
    },
  ];

  return (
    <section className="hardware-pagina">
      <h1 className="titulo-principal">Hardware</h1>

      <div className="grid-componentes">
        {components.map(({ name, desc, img, icon: Icon, color }, i) => (
          <article key={i} className="cartao-componente">
            <img src={img} alt={name} className="cartao-imagem" />
            <div className="cartao-corpo">
              <header className="cartao-cabecalho">
                <Icon className={`icone-componente ${color}`} />
                <h3>{name}</h3>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}