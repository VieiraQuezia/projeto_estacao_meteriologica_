import React from 'react';
import { Cpu, Thermometer, Wind, Zap, Cable } from 'lucide-react';
import './css/hardware.css';


export default function Hardware() {
  const components = [
    {
      name: 'ESP32',
      icon: Cpu,
      desc: 'O ESP32 é um microcontrolador de baixo custo, eficiente e potente, criado pela Espressif Systems. Ele possui Wi-Fi e Bluetooth integrados, processador dual-core de até 240 MHz, 520 KB de RAM. É amplamente usado em projetos de Internet das Coisas (IoT) e pode ser programado em C/C++, sendo compatível com Arduino IDE e ESP-IDF. Graças à sua versatilidade, o ESP32 é ideal para projetos como sensores de temperatura, fumaça, rastreadores e sistemas de automação residencial.',
      img: '/esp32.jpg',
      color: 'text-blue-600',
    },
    {
      name: 'Sensor DHT11',
      icon: Thermometer,
      desc: 'O DHT11 é um sensor de umidade e temperatura muito usado em automação residencial e monitoramento ambiental. Mede umidade entre 20% e 90% (±5%) e temperatura de 0°C a 50°C (±2°C), oferecendo leituras confiáveis. É compatível com Arduino, Raspberry Pi e ESP32, fácil de integrar e possui interface digital simples. Por sua precisão e durabilidade, é ideal para sistemas automáticos de controle climático, como irrigação baseada na umidade do solo e monitoramento de ambientes.',
      img: '/dht11.jpg',
      color: 'text-sky-500',
    },
    {
      name: 'Sensor MQ-135',
      icon: Wind,
      desc: 'O sensor MQ-135 é um sensor de qualidade do ar usado para detectar gases nocivos como CO₂, amônia, benzeno, fumaça e outros poluentes. Ele funciona medindo a variação de resistência elétrica em presença desses gases, permitindo avaliar o nível de poluição do ambiente. Compatível com Arduino, ESP32 e outras plataformas, é amplamente utilizado em projetos de monitoramento ambiental e automação, como estações de detecção de gases e sistemas de ventilação automática.',
      img: '/sensordegas.jpg',
      color: 'text-indigo-600',
    },
    {
      name: 'LEDs',
      icon: Zap,
      desc: 'Os LEDs (diodos emissores de luz) são componentes eletrônicos que emitem luz quando percorridos por corrente elétrica. São usados como indicadores visuais em circuitos, mostrando o status de funcionamento de um sistema ou servindo em alertas e iluminação. Por consumirem pouca energia, terem longa durabilidade e estarem disponíveis em várias cores e intensidades, os LEDs são ideais para projetos eletrônicos e de automação, como sinalizadores e luzes de aviso.',
      img: 'leds.jpg',
      color: 'text-yellow-500',
    },
    {
      name: 'Resistores',
      icon: Cable,
      desc: 'Um resistor é um componente eletrônico projetado para limitar ou controlar a corrente elétrica que passa por um circuito.Os resistores são componentes que se opõem a passagem de corrente elétrica, ou seja, “resistem” a passagem de corrente elétrica, limitando sua intensidade.',
      img: '/resistores.jpg',
      color: 'text-gray-500',
    },
    {
      name: 'Protoboard',
      icon: Cable,
      desc: 'A protoboard é uma placa de prototipagem usada para montar e testar circuitos eletrônicos sem solda. Possui furos e conexões internas que permitem ligar componentes como resistores, capacitores e circuitos integrados, facilitando testes, simulações e ajustes rápidos durante o desenvolvimento de projetos eletrônicos.',
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