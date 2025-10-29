import React from 'react';
import { Users, Mail, Linkedin, Github } from 'lucide-react';
import './css/equipe.css'; 

export default function Equipe() {
 const team = [{
 name: 'Quezia A. Vieira',
 funcao: 'Líder 👑',
 contribuicao: 'Coordenação geral, integração de sistemas e documentação técnica',
 imagem: ''
 }, {
 name: 'Leonardo M. Vicente',
 funcao: 'Vice-Líder 🧠',
 contribuicao: 'Montagem do circuito, testes de sensores e calibração',
 imagem: ''
 }, {
 name: 'Guilherme G. Santana',
 funcao: 'Desenvolvedor 💻',
 contribuicao: 'Programação do ESP32, implementação MQTT e debugging',
 imagem: ''
 }, {
 name: 'Hayeska L. A. Machado',
 funcao: 'Desenvolvedora 💻',
 contribuicao: 'Configuração do broker MQTT e arquitetura de rede',
 imagem: ''
 }, 
];
 return (
    <div className="equipe-pagina-principal">
  <div className="conteudo-largura-maxima">
  <h1 className="secao-titulo-principal">
   Nossa Equipe
  </h1>
  <p className="secao-subtitulo">
   Conheça os membros responsáveis pelo desenvolvimento deste projeto de
   estação meteorológica IoT
  </p>
        
  <div className="bloco-introducao-equipe">
   <img 
    src="https://imagems.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop" 
    alt="Equipe" 
    className="imagem-introducao" 
   />
   <div className="area-resumo-equipe">
   <Users className="icone-resumo-equipe" />
   <h2 className="titulo-resumo-equipe">
    Trabalho em Equipe
   </h2>
   <p className="texto-resumo-equipe">
    Este projeto foi desenvolvido de forma colaborativa, com cada
    membro contribuindo com suas habilidades específicas. A integração
    entre as diferentes áreas de conhecimento foi fundamental para o
    sucesso do projeto, demonstrando a importância do trabalho
    multidisciplinar em projetos de IoT.
   </p>
   </div>
  </div>
        
  <div className="grid-membros-equipe">
   {team.map((member, index) => (
            <div key={index} className="cartao-membro">
    <img 
     src={member.imagem} 
     alt={member.name} 
     className="foto-membro" 
    />
    <div className="info-membro">
    <h3 className="nome-membro">
     {member.name}
    </h3>
    <p className="funcao-membro">
     {member.funcao}
    </p>
    <p className="contribuicao-membro">
     {member.contribuicao}
    </p>
    <div className="links-sociais">
     <a href="#" className="link-social" aria-label={`Email de ${member.name}`}>
     <Mail />
     </a>
     <a href="#" className="link-social" aria-label={`LinkedIn de ${member.name}`}>
     <Linkedin />
     </a>
     <a href="#" className="link-social" aria-label={`Github de ${member.name}`}>
     <Github />
     </a>
    </div>
    </div>
   </div>
          ))}
  </div>
        
  <div className="bloco-agradecimentos">
   <h2 className="titulo-agradecimentos">Agradecimentos</h2>
   <p className="texto-agradecimentos">
   Agradecemos aos professores orientadores, à instituição de ensino e
   a todos que contribuíram direta ou indiretamente para a realização
   deste projeto. Essa experiência foi fundamental para nosso
   desenvolvimento acadêmico e profissional.
   </p>
  </div>
  </div>
 </div>
  );
}