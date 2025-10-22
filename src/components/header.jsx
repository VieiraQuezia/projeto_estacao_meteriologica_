import React, { useState } from 'react';
import { Menu, X, CloudIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const navItems = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/projeto',
    label: 'O Projeto'
  }, {
    path: '/simulacao',
    label: 'Simulação Wokwi'
  }, {
    path: '/hardware',
    label: 'Hardware'
  }, {
    path: '/software',
    label: 'Software'
  }, {
    path: '/perguntas',
    label: 'Perguntas e Respostas'
  }, {
    path: '/resultados',
    label: 'Resultados'
  }, {
    path: '/equipe',
    label: 'Equipe'
  }];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <CloudIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              Estação Meteorológica IoT
            </span>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <span key={index} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </span>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <span key={index} className="text-sm font-medium text-gray-600">
                {item}
              </span>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
