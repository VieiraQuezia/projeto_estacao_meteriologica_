import React from 'react';
import { CheckCircle, TrendingUp, Award } from 'lucide-react';
import './css/Resultados.css';

export default function Resultados() {
  const aprendizados = [
    'Compreensão prática de protocolos IoT e comunicação MQTT',
    'Experiência com integração de múltiplos sensores em um único microcontrolador',
    'Desenvolvimento de habilidades em programação embarcada com ESP32',
    'Conhecimento sobre gerenciamento de diferentes níveis de tensão em circuitos',
    'Prática em debugging e resolução de problemas de hardware e software',
    'Entendimento de arquitetura publish/subscribe para IoT',
    'Experiência com simulação de circuitos antes da implementação física',
    'Desenvolvimento de sistemas de alerta baseados em leituras de sensores',
    'Conhecimento sobre calibração e interpretação de dados de sensores',
    'Habilidades em documentação técnica e apresentação de projetos'
  ];
  
  return (
    <div className="resultados-container">
      <div className="resultados-conteudo-max">
        
        {/* Título Principal */}
        <h1 className="resultados-titulo-principal">
          Resultados
        </h1>
        
        {/* Bloco: Aprendizados */}
        <div className="resultados-cartao resultados-cartao-aprendizados">
          <div className="resultados-cabecalho">
            <TrendingUp className="resultados-icone resultados-icone-aprendizados" />
            <h2 className="resultados-titulo-secao">Aprendizados</h2>
          </div>
          <div className="aprendizados-lista-container">
            {aprendizados.map((learning, index) => (
              <div key={index} className="aprendizados-item">
                <CheckCircle className="aprendizados-icone-check" />
                <p className="aprendizados-texto">{learning}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bloco: Projeto em Funcionamento */}
        <div className="resultados-cartao resultados-cartao-projeto">
          <div className="resultados-cabecalho">
            <Award className="resultados-icone resultados-icone-projeto" />
            <h2 className="resultados-titulo-secao">
              Projeto em Funcionamento
            </h2>
          </div>
          
          <div className="projeto-funcionamento-grid">
            {/* Coluna 1: Hardware Montado */}
            <div className="hardware-secao">
              <h3 className="subtitulo-secao">
                Hardware Montado
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" 
                alt="Projeto Físico" 
                className="imagem-projeto" 
              />
              <p className="legenda-projeto">
                Circuito completo montado em protoboard com todos os componentes
                funcionando corretamente.
              </p>
            </div>
            
            {/* Coluna 2: Interface MQTT */}
            <div className="interface-secao">
              <h3 className="subtitulo-secao">
                Interface MQTT
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
                alt="Interface MQTT" 
                className="imagem-projeto" 
              />
              <p className="legenda-projeto">
                Dados sendo recebidos em tempo real através do cliente MQTT no
                smartphone.
              </p>
            </div>
          </div>
          
          {/* Seção de Demonstração de Vídeo */}
          <div className="demonstracao-secao">
            <h3 className="subtitulo-secao">
              Demonstração de Detecção de Gases
            </h3>
            <div className="video-placeholder-container">
              <div className="video-placeholder-conteudo">
                <p className="video-placeholder-titulo">
                  Vídeo de Demonstração
                </p>
                <p className="video-placeholder-legenda">Teste de detecção com queima de papel</p>
              </div>
            </div>
            <p className="legenda-projeto video-descricao">
              O vídeo demonstra o sistema detectando gases nocivos quando um
              fósforo é aceso para queimar papel. O sensor MQ-135 identifica
              rapidamente a presença de fumaça, acionando o LED de alerta e
              enviando notificações através do MQTT. A resposta do sistema é
              praticamente instantânea, mostrando a eficácia do monitoramento em
              tempo real.
            </p>
          </div>
        </div>
        
        {/* Bloco: Conclusão */}
        <div className="conclusao-cartao">
          <h2 className="conclusao-titulo">Conclusão</h2>
          <p className="conclusao-texto">
            O projeto foi concluído com sucesso, demonstrando a viabilidade de
            criar uma estação meteorológica IoT de baixo custo. A integração
            entre hardware e software funcionou conforme esperado, e o sistema
            mostrou-se confiável para monitoramento contínuo de condições
            ambientais. Este projeto serviu como excelente oportunidade de
            aprendizado prático sobre IoT, programação embarcada e trabalho em
            equipe.
          </p>
        </div>
      </div>
    </div>
  );
}