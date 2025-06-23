import React from 'react';
import './HomePage.css';
import { FaRegUserCircle } from 'react-icons/fa';
//import { AiFillQuestionCircle, AiFillPhone } from 'react-icons/ai';
//import { MdPrivateConnectivity } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className="container" role="main" aria-label="Página Inicial">
      <header className="header">
        <div className="header-left">
          <img src="/imagens/19.png" width="180px" height="100px" alt="" className="d-inline-block align-top" />
        </div>
        <div className="header-right">
          <button className="btn" aria-label="Botão de Login">
            <FaRegUserCircle color='white' size={40} style={{ marginRight: 10 }} />
          </button>
        </div>
      </header>



      <main className="main">
        <div className='imgcactaum'></div>
        <h2 className="tagline">
        Qual das opções converte corretamente uma 
        entrada do usuário para número inteiro.
        </h2>

      
        <button className="play-button" aria-label="Botão Play">
          Play
        </button>

      </main>
    </div>
  );
};

export default HomePage;








/*<footer className="footer">
        <div>
          &copy; 2024 MeuSite |
          <a href="#sobre" aria-label="Sobre o site" className="footer-link">
            Sobre
            <AiFillQuestionCircle size={20} style={{ marginLeft: 10 }} />
          </a> |
          <a href="#contato" aria-label="Contato" className="footer-link">
            Contato
            <AiFillPhone size={20} style={{ marginLeft: 10 }} />
          </a> |
          <a href="#privacidade" aria-label="Política de Privacidade" className="footer-link">
            Privacidade
            <MdPrivateConnectivity size={25} style={{ marginLeft: 10 }} />
          </a>
        </div>
      </footer>*/