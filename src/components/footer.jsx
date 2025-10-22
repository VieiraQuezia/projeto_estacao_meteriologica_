import React from 'react';
import { Github, Linkedin, Mail, CloudIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CloudIcon className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">
                Estação Meteorológica IoT
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Projeto acadêmico de uma estação meteorológica utilizando ESP32,
              sensores DHT11 e MQ-135, e protocolo MQTT.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Instituição de Ensino</p>
              <p>Curso de Tecnologia</p>
              <p>contato@exemplo.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 Estação Meteorológica IoT. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
}