import React from 'react';
import './ProgressoDeNiveis.css'; // Certifique-se de que o caminho está correto
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

const ProgressoDeNiveis = () => {

  const niveis = [
    // Certifique-se de que esses caminhos estão corretos e as imagens existem em public/imagens/
    { id: 1, src: "/imagens/4.png", alt: 'Cenário do nível 1' },
    { id: 2, src: '/imagens/5.png', alt: 'Cenário do nível 2' },
    { id: 3, src: '/imagens/6.png', alt: 'Cenário do nível 3' },
    { id: 4, src: '/imagens/7.png', alt: 'Cenário do nível 4' },
  ];

  const handleNivelClick = (nivelId) => {
    alert(`Você clicou no Nível ${nivelId}! Agora vamos para uma nova página e iniciar as atividades do Nível ${nivelId}.`);
    // Aqui você adicionaria sua lógica de navegação, por exemplo:
    // navigate(`/nivel/${nivelId}`);
  };

  const handleVoltarClick = () => {
    alert('Você clicou em Voltar!');
    // Aqui você adicionaria sua lógica para voltar, por exemplo:
    // history.goBack();
  };

  const handleHomeClick = () => {
    alert('Você clicou no botão Início!');
    // Ex: navigate('/');
  };

  const handleProfileClick = () => {
    alert('Você clicou no botão Perfil!');
    // Ex: navigate('/perfil');
  };

  return (
    <div className="container" role="main" aria-label="Página de seleção de níveis do jogo">

      <header className="header">
        <div className="header-left">
          <img
            src="/imagens/19.png" // Certifique-se que o logo "Cacthon" está em public/imagens/19.png
            width="180px"
            height="100px"
            alt="Logo Cacthon"
            className="d-inline-block align-top"
          />
        </div>
        <div className="header-right">
          <button className="header-icon-btn" onClick={handleHomeClick} aria-label="Botão Início">
            <FaHouse color='white' size={40} />
          </button>
          <button className="header-icon-btn" onClick={handleProfileClick} aria-label="Botão Perfil do Usuário">
            <FaRegUserCircle color='white' size={40} />
          </button>
        </div>
      </header>

      <main className="main-content">
        <button className='btnVoltar' onClick={handleVoltarClick} aria-label="Voltar para a página anterior">
          <GoArrowLeft color='green' size={40} />
        </button>

        <div className="game-area">
    
          <img
            src="/imagens/3.png" 
            alt="Cenário de jogo com um caminho e círculos de nível"
            className="background-image"
          />

          {/* Container para os botões de nível, que serão posicionados sobre os círculos */}
          <div className="level-buttons-container">
            {niveis.map((nivel) => (
              <button
                key={nivel.id}
                className={`level-button level-${nivel.id}`}
                onClick={() => handleNivelClick(nivel.id)}
                aria-label={`Iniciar Nível ${nivel.id}`}
              >
                <img src={nivel.src} alt={nivel.alt} className="level-icon-image" />
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgressoDeNiveis;