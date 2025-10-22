import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
// Certifique-se de importar o seu arquivo CSS aqui:
import './projeto.css'; 

export default function Projeto() {
  return (  
    // Container Principal: Fundo cinza claro
    <div className="projeto-container">
      <div className="projeto-conteudo-max">
        
        {/* Título Principal */}
        <h1 className="projeto-titulo">
          O Projeto
        </h1>

        {/* Bloco: O Problema */}
        <div className="projeto-cartao projeto-problema">
          <div className="projeto-cartao-cabecalho">
            <AlertTriangle className="projeto-icone projeto-icone-alerta" />
            <h2 className="projeto-cartao-titulo">O Problema</h2>
          </div>
          <p className="projeto-paragrafo">
            O monitoramento de condições ambientais é essencial para garantir a
            saúde e o bem-estar das pessoas. A temperatura e umidade inadequadas
            podem causar desconforto e problemas de saúde, enquanto a presença
            de gases nocivos no ar pode ser extremamente perigosa.
          </p>
          <p className="projeto-paragrafo">
            Muitos ambientes, especialmente em áreas urbanas e industriais,
            carecem de sistemas de monitoramento acessíveis e em tempo real. A
            detecção tardia de problemas na qualidade do ar pode resultar em
            sérios riscos à saúde, tornando essencial o desenvolvimento de
            soluções de monitoramento contínuo e acessível.
          </p>
        </div>

        {/* Bloco: A Solução */}
        <div className="projeto-cartao projeto-solucao">
          <div className="projeto-cartao-cabecalho">
            <CheckCircle className="projeto-icone projeto-icone-solucao" />
            <h2 className="projeto-cartao-titulo">A Solução</h2>
          </div>
          <p className="projeto-paragrafo solucao-paragrafo">
            A Internet das Coisas (IoT) oferece uma solução eficaz através da
            integração de sensores inteligentes com comunicação em tempo real.
            Nossa estação meteorológica utiliza tecnologia de baixo custo e alta
            eficiência para monitorar continuamente as condições ambientais e
            alertar sobre possíveis problemas.
          </p>
          
          {/* Fluxograma do Sistema */}
          <div className="fluxograma-secao">
            <h3 className="fluxograma-titulo">
              Fluxograma do Sistema
            </h3>
            <div className="fluxograma-passos-container">
              
              {/* Passo 1: Sensores */}
              <div className="fluxograma-bloco">
                <p className="fluxograma-bloco-titulo">Sensores</p>
                <p className="fluxograma-bloco-descricao">DHT11 & MQ-135</p>
              </div>

              {/* Seta 1 */}
              <ArrowRight className="fluxograma-seta" />

              {/* Passo 2: ESP32 */}
              <div className="fluxograma-bloco">
                <p className="fluxograma-bloco-titulo">ESP32</p>
                <p className="fluxograma-bloco-descricao">Processamento</p>
              </div>

              {/* Seta 2 */}
              <ArrowRight className="fluxograma-seta" />

              {/* Passo 3: Mosquitto Broker */}
              <div className="fluxograma-bloco">
                <p className="fluxograma-bloco-titulo">Mosquitto Broker</p>
                <p className="fluxograma-bloco-descricao">Servidor MQTT</p>
              </div>

              {/* Seta 3 */}
              <ArrowRight className="fluxograma-seta" />

              {/* Passo 4: Cliente MQTT */}
              <div className="fluxograma-bloco">
                <p className="fluxograma-bloco-titulo">Cliente MQTT</p>
                <p className="fluxograma-bloco-descricao">Visualização</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}