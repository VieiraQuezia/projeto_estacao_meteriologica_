import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';
// Certifique-se de importar o seu arquivo CSS aqui:
import './css/simulacao.css'; 
import Wokwi from '/wokwi.png'

export default function Simulacao() {
  return (
    <div className="simulacao-container">
      <div className="simulacao-conteudo-max">
        
        {/* Título Principal */}
        <h1 className="simulacao-titulo-principal">
          Simulação Wokwi
        </h1>
        
        {/* Cartão principal */}
        <div className="simulacao-cartao">
          
          {/* Cabeçalho: Circuito Virtual */}
          <div className="simulacao-cabecalho">
            <Cpu className="simulacao-icone" />
            <h2 className="simulacao-titulo-secundario">
              Circuito Virtual
            </h2>
          </div>
          
          {/* Imagem do Circuito */}
          <div className="simulacao-imagem-container">
            <img 
              src={Wokwi} 
              alt="Simulação Wokwi" 
              className="simulacao-imagem" 
            />
          </div>
          
          <div className="simulacao-conteudo-texto">
            {/* Parágrafo de Introdução */}
            <p className="simulacao-paragrafo">
              A simulação foi desenvolvida utilizando a plataforma{' '}
              <strong>Wokwi</strong>, que permite testar e validar o circuito
              antes da montagem física. O ambiente virtual oferece uma
              representação precisa do comportamento dos componentes e facilita
              a identificação de problemas.
            </p>

            {/* Subtítulo: Componentes */}
            <h3 className="simulacao-subtitulo">
              Componentes da Simulação:
            </h3>

            {/* Lista de Componentes */}
            <ul className="simulacao-lista">
              <li>ESP32 como microcontrolador principal</li>
              <li>Sensor DHT11 para temperatura e umidade (alimentado a 3V)</li>
              <li>
                Sensor MQ-135 para detecção de qualidade do ar (alimentado a 5V)
              </li>
              <li>LEDs indicadores de status e alerta</li>
              <li>Resistores de limitação de corrente</li>
              <li>Conexões via jumpers na protoboard virtual</li>
            </ul>

            {/* Subtítulo: IDE Utilizada */}
            <h3 className="simulacao-subtitulo">
              IDE Utilizada:
            </h3>

            {/* Parágrafo sobre a IDE */}
            <p className="simulacao-paragrafo">
              O código foi desenvolvido utilizando a{' '}
              <strong>IDE do Arduino</strong> com suporte para ESP32. A IDE
              oferece um ambiente de desenvolvimento completo com editor de
              código, compilador e ferramentas de upload para o
              microcontrolador.
            </p>
          </div>

          {/* Botão de Acesso */}
          <div className="simulacao-botao-container">
            <a href="https://wokwi.com/projects/444886458453270529" className="simulacao-botao" target="_blank" rel="noopener noreferrer">
              Acessar Projeto no Wokwi
              <ExternalLink className="simulacao-botao-icone" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}