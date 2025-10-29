import React from 'react';
import { Users, Mail, Linkedin, Github } from 'lucide-react';
import './css/equipe.css'; // Importa o novo CSS

export function Equipe() {
 const team = [{
 name: 'Quezia A. Vieira',
 funcao: 'Líder',
 contribuicao: 'Coordenação geral, integração de sistemas e documentação técnica',
imagem: ''
 }, {
 name: 'Leonardo M. Vicente',
 funcao: 'Vice-Líder',
 contribuicao: 'Montagem do circuito, testes de sensores e calibração',
 imagem: ''
 }, {
 name: 'Guilherme G. Santana',
 funcao: 'Desenvolvedor',
 contribuicao: 'Programação do ESP32, implementação MQTT e debugging',
 imagem: ''
 }, {
 name: 'Hayeska L. A. Machado',
 funcao: 'Desenvolvedora',
 contribuicao: 'Configuração do broker MQTT e arquitetura de rede',
 imagem: ''
 }, 
];
 return (
    <div className="team-page-wrapper">
  <div className="content-max-width">
  <h1 className="section-main-title">
   Nossa Equipe
  </h1>
  <p className="section-subtitle">
   Conheça os membros responsáveis pelo desenvolvimento deste projeto de
   estação meteorológica IoT
  </p>
        
        {/* Bloco de Trabalho em Equipe */}
  <div className="intro-team-block">
   <img src="https://imagems.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop" alt="Equipe" className="intro-imagem" />
   <div className="team-summary-area">
   <Users className="team-summary-icon" />
   <h2 className="team-summary-title">
    Trabalho em Equipe
   </h2>
   <p className="team-summary-text">
    Este projeto foi desenvolvido de forma colaborativa, com cada
    membro contribuindo com suas habilidades específicas. A integração
    entre as diferentes áreas de conhecimento foi fundamental para o
    sucesso do projeto, demonstrando a importância do trabalho
    multidisciplinar em projetos de IoT.
   </p>
   </div>
  </div>
        
        {/* Grid de Membros */}
  <div className="team-members-grid">
   {team.map((member, index) => (
            <div key={index} className="member-card">
    <img src={member.imagem} alt={member.name} className="member-photo" />
    <div className="member-info">
    <h3 className="member-name">
     {member.name}
    </h3>
    <p className="member-funcao">
     {member.funcao}
    </p>
    <p className="member-contribuicao">
     {member.contribuicao}
    </p>
    <div className="social-links">
     <a href="#" className="social-link" aria-label={`Email de ${member.name}`}>
     <Mail />
     </a>
     <a href="#" className="social-link" aria-label={`LinkedIn de ${member.name}`}>
     <Linkedin />
     </a>
     <a href="#" className="social-link" aria-label={`Github de ${member.name}`}>
     <Github />
     </a>
    </div>
    </div>
   </div>
          ))}
  </div>
        
        {/* Bloco de Agradecimentos */}
  <div className="thanks-block">
   <h2 className="thanks-title">Agradecimentos</h2>
   <p className="thanks-text">
   Agradecemos aos professores orientadores, à instituição de ensino e
   a todos que contribuíram direta ou indiretamente para a realização
   deste projeto. Esta experiência foi fundamental para nosso
   desenvolvimento acadêmico e profissional.
   </p>
  </div>
  </div>
 </div>
  );
}