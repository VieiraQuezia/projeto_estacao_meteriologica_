import React from 'react';
import { Code, Settings, Upload } from 'lucide-react';
import './css/software.css';

export default function Software() {
  const codeExample = `#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// === PINOS ORIGINAIS ===
#define PINAOUT 35
#define LEDGAS 16
#define LEDTEMPERATURA 17
#define LEDUMIDADE 5
#define DHT_PIN 22
#define DHT_TYPE DHT22
const int Limite = 3628;

// === CONFIG WiFi ===
#define WIFI_SSID "AP360_SENAI"
#define WIFI_PASS "senai123"

// === CONFIG MQTT ===
#define MQTT_SERVER "10.136.38.159"
#define MQTT_PORT 1883
#define CLIENT_ID "Projeto_grupo06"
#define TOPIC_TEMP "aulas/IOT/grupo06/temperatura"
#define TOPIC_HUM "aulas/IOT/grupo06/umidade"
#define TOPIC_GAS "aulas/IOT/grupo06/gas"

// === OBJETOS E VARIÁVEIS ===
DHT dht(DHT_PIN, DHT_TYPE);
WiFiClient espClient;
PubSubClient mqttClient(espClient);

float temperatura = 0.0;
float umidade = 0.0;
unsigned long lastMsg = 0;
const long PUBLISH_INTERVAL = 5000; // 5 segundos

// === FUNÇÃO: CONECTAR AO WIFI ===
void setup_wifi() {
  delay(10);
  Serial.print("Conectando a rede: ");
  Serial.println(WIFI_SSID);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi Conectado!");
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
}

// === FUNÇÃO: CONECTAR AO MQTT ===
void reconnect_mqtt() {
  while (!mqttClient.connected()) {
    Serial.print("Tentando conexão MQTT...");
    if (mqttClient.connect(CLIENT_ID)) {
      Serial.println(" Conectado!");
    } else {
      Serial.print(" Falha, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" - Tentando novamente em 5 segundos...");
      delay(5000);
    }
  }
}

// === PUBLICAR DADOS NO BROKER ===
void publish_data(const char* topic, float value) {
  char payload[10];
  snprintf(payload, sizeof(payload), "%.2f", value);
  mqttClient.publish(topic, payload);
  Serial.print("Publicado em ");
  Serial.print(topic);
  Serial.print(": ");
  Serial.println(payload);
}

// === CONFIGURAÇÃO INICIAL ===
void setup() {
  Serial.begin(115200);
  pinMode(DHT_PIN, INPUT);
  pinMode(LEDTEMPERATURA, OUTPUT);
  pinMode(LEDUMIDADE, OUTPUT);
  pinMode(LEDGAS, OUTPUT);
  pinMode(PINAOUT, INPUT);

  dht.begin();
  setup_wifi();
  mqttClient.setServer(MQTT_SERVER, MQTT_PORT);
  Serial.println("Sistema iniciado com sucesso!");
}

// === LOOP PRINCIPAL ===
void loop() {
  // Manter conexões
  if (!mqttClient.connected()) {
    reconnect_mqtt();
  }
  mqttClient.loop();

  unsigned long now = millis();
  if (now - lastMsg > PUBLISH_INTERVAL) {
    lastMsg = now;

    // === LEITURA DO SENSOR DHT ===
    temperatura = dht.readTemperature();
    umidade = dht.readHumidity();

    if (isnan(temperatura) || isnan(umidade)) {
      Serial.println("Erro ao ler o sensor DHT!");
      return;
    }

    // === LEITURA DO SENSOR DE GÁS ===
    int valorgas = analogRead(PINAOUT);

    Serial.println("=== Leitura dos Sensores ===");
    Serial.println("Temperatura: " + String(temperatura, 1) + "°C");
    Serial.println("Umidade: " + String(umidade, 1) + "%");
    Serial.println("Valor do Gás: " + String(valorgas));
    Serial.println("----------------------------");

    // === LÓGICA LED TEMPERATURA ===
    if (temperatura > 30 ) {
      digitalWrite(LEDTEMPERATURA, HIGH);
    } else {
      digitalWrite(LEDTEMPERATURA, LOW);
    }

    // === LÓGICA LED UMIDADE ===
    if (umidade > 40) {
      digitalWrite(LEDUMIDADE, HIGH);
    } else {
      digitalWrite(LEDUMIDADE, LOW);
    }

    // === LÓGICA LED GÁS ===
    if (valorgas > Limite) {
      digitalWrite(LEDGAS, HIGH);
      Serial.println("⚠️ Cuidado! Gás Tóxico Detectado!");
    } else {
      digitalWrite(LEDGAS, LOW);
      Serial.println("✅ Ambiente Seguro.");
    }

    // === PUBLICAÇÕES MQTT ===
    publish_data(TOPIC_TEMP, temperatura);
    publish_data(TOPIC_HUM, umidade);
    publish_data(TOPIC_GAS, valorgas);
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