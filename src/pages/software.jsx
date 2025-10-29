import React from 'react';
import { Code, Settings, Upload } from 'lucide-react';
import './css/software.css';

export default function Software() {
  const codeExample = `#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
// Configurações de Wi-Fi
const char* ssid = "SEU_WIFI";
const char* password = "SUA_SENHA";
// Configurações do MQTT
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
// Configuração dos sensores
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
#define MQ135PIN 34
#define LED_STATUS 2
#define LED_ALERT 15
WiFiClient espClient;
PubSubClient client(espClient);
void setup() {
  Serial.begin(115200);
  // Inicializa LEDs
  pinMode(LED_STATUS, OUTPUT);
  pinMode(LED_ALERT, OUTPUT);
  // Conecta ao Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi conectado!");
  // Configura MQTT
  client.setServer(mqtt_server, mqtt_port);
  // Inicializa sensor DHT11
  dht.begin();
}
void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  // Leitura dos sensores
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  int airQuality = analogRead(MQ135PIN);
  // Verifica leituras válidas
  if (!isnan(temp) && !isnan(hum)) {
    // Publica dados via MQTT
    String payload = String(temp) + "," + String(hum) + "," + String(airQuality);
    client.publish("estacao/dados", payload.c_str());
    // Controle de LEDs
    digitalWrite(LED_STATUS, HIGH);
    if (airQuality > 400) {
      digitalWrite(LED_ALERT, HIGH);
    } else {
      digitalWrite(LED_ALERT, LOW);
    }
  }
  delay(2000);
}
void reconnect() {
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("MQTT conectado!");
    } else {
      delay(5000);
    }
  }
}`;
  return (
    <div className="pagina-software">
      <div className="conteudo-principal">
        <h1 className="titulo-pagina">Software</h1>
        
        {/* IDE do Arduino */}
        <div className="cartao-secao">
          <div className="cabecalho-secao">
            <Settings className="icone-secao icone-azul" />
            <h2 className="titulo-secao">IDE do Arduino</h2>
          </div>
          <p className="paragrafo-texto">
            O desenvolvimento do código foi realizado utilizando a{' '}
            <strong>IDE do Arduino</strong>, uma plataforma de código aberto
            amplamente utilizada para programação de microcontroladores.
          </p>
          <h3 className="titulo-subsecao">Configuração do Ambiente</h3>
          <div className="lista-config-caixa">
            <ol>
              <li>Instalação da IDE do Arduino (versão 2.0 ou superior)</li>
              <li>Adição do suporte para ESP32 no Gerenciador de Placas</li>
              <li>Seleção da placa "ESP32 Dev Module"</li>
              <li>Configuração da porta serial correta</li>
              <li>
                Instalação das bibliotecas necessárias:
                <ul>
                  <li>PubSubClient (para MQTT)</li>
                  <li>DHT sensor library</li>
                  <li>WiFi (nativa do ESP32)</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Código-Fonte */}
        <div className="cartao-secao">
          <div className="cabecalho-secao">
            <Code className="icone-secao icone-verde" />
            <h2 className="titulo-secao">Código-Fonte</h2>
          </div>
          <p className="paragrafo-texto" style={{ marginBottom: '1rem' }}>
            O código abaixo demonstra a implementação completa da estação
            meteorológica, incluindo leitura dos sensores, conexão Wi-Fi,
            comunicação MQTT e controle de LEDs.
          </p>
          <div className="bloco-codigo">
            <pre className="texto-codigo">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>

        {/* Principais Funcionalidades */}
        <div className="cartao-secao">
          <div className="cabecalho-secao">
            <Upload className="icone-secao icone-roxo" />
            <h2 className="titulo-secao">Principais Funcionalidades</h2>
          </div>
          <div className="grade-funcionalidades">
            
            <div className="item-funcionalidade borda-azul">
              <h3 className="titulo-funcionalidade">Leitura de Sensores</h3>
              <p className="descricao-funcionalidade">
                Coleta periódica de dados de temperatura, umidade e qualidade do
                ar.
              </p>
            </div>
            
            <div className="item-funcionalidade borda-verde">
              <h3 className="titulo-funcionalidade">Conexão Wi-Fi</h3>
              <p className="descricao-funcionalidade">
                Estabelecimento e manutenção de conexão com a rede sem fio.
              </p>
            </div>
            
            <div className="item-funcionalidade borda-roxo">
              <h3 className="titulo-funcionalidade">Protocolo MQTT</h3>
              <p className="descricao-funcionalidade">
                Publicação de dados em tópicos MQTT para acesso remoto.
              </p>
            </div>
            
            <div className="item-funcionalidade borda-laranja">
              <h3 className="titulo-funcionalidade">Sistema de Alertas</h3>
              <p className="descricao-funcionalidade">
                Controle de LEDs baseado nos valores de qualidade do ar.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}