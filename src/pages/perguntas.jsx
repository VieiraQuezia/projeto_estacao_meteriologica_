import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './css/perguntas.css'; 

export default function Perguntas() {
  // Removendo a anotação de tipo para evitar erro de sintaxe em JavaScript puro
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [{
    categoria: 'Sensores',
    perguntas: [{
      q: 'Como funciona o sensor DHT11?',
      a: 'O DHT11 é um sensor digital que mede temperatura e umidade. Ele utiliza um sensor capacitivo de umidade e um termistor para medir o ar circundante, enviando os dados através de um sinal digital.'
    }, {
      q: 'Como funciona o sensor MQ-135?',
      a: 'O MQ-135 é um sensor de qualidade do ar que detecta gases como CO2, amônia, benzeno e fumaça. Ele opera através de uma mudança de resistência quando exposto a gases, convertendo essa variação em um sinal analógico.'
    }, {
      q: 'Por que o DHT11 opera a 3V e o MQ-135 a 5V?',
      a: 'O DHT11 foi projetado para operar com baixa tensão (3-5V), sendo compatível com a saída de 3.3V do ESP32. O MQ-135 requer 5V para o aquecimento adequado de seu elemento sensor, garantindo leituras precisas.'
    }, {
      q: 'Qual a precisão dos sensores utilizados?',
      a: 'O DHT11 tem precisão de ±2°C para temperatura e ±5% para umidade. O MQ-135 fornece leituras relativas de qualidade do ar, sendo mais adequado para detecção de variações do que medições absolutas.'
    }]
  }, {
    categoria: 'Hardware',
    perguntas: [{
      q: 'Por que escolhemos o ESP32?',
      a: 'O ESP32 oferece Wi-Fi integrado, múltiplas portas GPIO, suporte a diferentes voltagens e excelente custo-benefício. Sua capacidade de processamento e conectividade o tornam ideal para projetos IoT.'
    }, {
      q: 'Como resolvemos o problema de diferentes voltagens?',
      a: 'Utilizamos a saída de 3.3V do ESP32 para o DHT11 e a saída de 5V (via USB) para o MQ-135. O ESP32 possui conversores ADC que podem ler sinais de ambas as voltagens.'
    }, {
      q: 'Qual a função dos LEDs no projeto?',
      a: 'Os LEDs servem como indicadores visuais: o LED verde indica que o sistema está funcionando normalmente, enquanto o LED vermelho/amarelo alerta sobre níveis elevados de poluentes no ar.'
    }, {
      q: 'Por que usar uma protoboard?',
      a: 'A protoboard permite montagem rápida e modificações fáceis durante o desenvolvimento, sem necessidade de solda. É ideal para prototipagem e testes.'
    }]
  }, {
    categoria: 'Comunicação',
    perguntas: [{
      q: 'Por que escolhemos o protocolo MQTT?',
      a: 'O MQTT é leve, eficiente e ideal para IoT. Ele usa o modelo publish/subscribe, consome pouca largura de banda e é perfeito para dispositivos com recursos limitados como o ESP32.'
    }, {
      q: 'O que é o Mosquitto Broker?',
      a: 'Mosquitto é um broker MQTT de código aberto que gerencia as mensagens entre publishers (ESP32) e subscribers (aplicativo móvel). Ele funciona como intermediário na comunicação.'
    }, {
      q: 'Como funciona a conexão Wi-Fi?',
      a: 'O ESP32 se conecta à rede Wi-Fi local usando as credenciais programadas. Uma vez conectado, ele pode enviar dados para o broker MQTT através da internet.'
    }, {
      q: 'É possível acessar os dados remotamente?',
      a: 'Sim, desde que o broker MQTT esteja acessível pela internet. Podemos usar serviços como HiveMQ ou configurar port forwarding no roteador.'
    }]
  }, {
    categoria: 'Software',
    perguntas: [{
      q: 'Quais bibliotecas foram necessárias?',
      a: 'Utilizamos WiFi.h para conectividade, PubSubClient.h para MQTT e DHT.h para o sensor de temperatura/umidade. Todas são disponíveis gratuitamente no gerenciador de bibliotecas do Arduino.'
    }, {
      q: 'Como tratamos erros de leitura dos sensores?',
      a: 'Implementamos verificações usando isnan() para detectar leituras inválidas do DHT11 e estabelecemos valores limites para o MQ-135, ignorando leituras fora do esperado.'
    }, {
      q: 'Qual a frequência de leitura dos sensores?',
      a: 'Configuramos leituras a cada 2 segundos, balanceando entre atualização em tempo real e consumo de energia. O DHT11 recomenda mínimo de 2 segundos entre leituras.'
    }, {
      q: 'Como funciona a reconexão automática?',
      a: 'Implementamos uma função reconnect() que tenta restabelecer conexão MQTT caso seja perdida, com tentativas a cada 5 segundos até ter sucesso.'
    }]
  }, {
    categoria: 'Desafios',
    perguntas: [{
      q: 'Quais foram os principais desafios técnicos?',
      a: 'Gerenciar diferentes voltagens de alimentação, calibrar o sensor MQ-135, garantir conexão estável Wi-Fi/MQTT e otimizar o consumo de energia foram os maiores desafios.'
    }, {
      q: 'Como testamos a detecção de gases?',
      a: 'Utilizamos fontes controladas de fumaça (papel queimando) e monitoramos as variações nas leituras do MQ-135 e o acionamento dos LEDs de alerta.'
    }, {
      q: 'Houve problemas com a simulação no Wokwi?',
      a: 'A principal limitação foi simular com precisão o comportamento do MQ-135, já que o Wokwi tem suporte limitado para esse sensor. Validamos o comportamento no hardware real.'
    }]
  }, {
    categoria: 'Aplicações',
    perguntas: [{
      q: 'Onde este projeto pode ser aplicado?',
      a: 'Em residências, escritórios, laboratórios, estufas, indústrias e qualquer ambiente onde o monitoramento de qualidade do ar seja importante.'
    }, {
      q: 'É possível expandir o projeto?',
      a: 'Sim! Podemos adicionar mais sensores (CO2, pressão atmosférica), armazenamento de dados em nuvem, interface web, notificações push e análise de dados históricos.'
    }]
  }];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="perguntas-container">
      <div className="perguntas-conteudo-max">
        
        <h1 className="perguntas-titulo-principal">
          Perguntas e Respostas
        </h1>
        
        <div className="perguntas-categorias-wrapper">
          {faqs.map((categoria, categoriaIndex) => (
            <div key={categoriaIndex} className="perguntas-categorias-wrapper">
              
              <h2 className="perguntas-categoria-titulo">
                {categoria.categoria}
              </h2>
              
              <div className="perguntas-itens-categoria">
                {categoria.perguntas.map((faq, faqIndex) => {
                  const index = categoriaIndex * 100 + faqIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={index} 
                      className="faq-item"
                    >
                      <button 
                        onClick={() => toggleFaq(index)} 
                        className="faq-pergunta-botao"
                      >
                        <span className="faq-pergunta-texto">
                          {faq.q}
                        </span>
                        {isOpen 
                          ? <ChevronUp className="faq-icone aberto" /> 
                          : <ChevronDown className="faq-icone fechado" />
                        }
                      </button>
                      
                      {isOpen && (
                        <div className="faq-resposta">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}