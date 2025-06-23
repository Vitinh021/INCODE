/* eslint-disable no-undef */
import React from 'react';
import './ProgressoDeNivel1.css'; // Certifique-se de que o caminho está correto
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

const ProgressoDeNivel1 = () => {

    // 1. Defina a função handleNivelClick
    const handleNivelClick = (idDoNivel) => {
        alert(`Você clicou no Nível ${idDoNivel}!`);
        // Aqui você pode adicionar a lógica para navegar para a tela do nível
        // Por exemplo, usando React Router: navigate(`/nivel/${idDoNivel}`);
    };

    const niveis = [

        { id: 1, src: "/imagens/9.png", alt: 'Cenário do nível 1' },
        { id: 2, src: '/imagens/9.png', alt: 'Cenário do nível 2' },
        { id: 3, src: '/imagens/9.png', alt: 'Cenário do nível 3' },
        { id: 4, src: '/imagens/9.png', alt: 'Cenário do nível 4' },
        { id: 5, src: '/imagens/9.png', alt: 'Cenário do nível 5' },
      ];


  return (
    <div className="container" role="main" aria-label="Página Inicial">
      <header className="header">
        <div className="header-left">
          {/* Ajustado width/height no CSS para melhor responsividade */}
          <img src="/imagens/19.png" alt="Logo Cacthon" className="header-logo" />
        </div>
        <div className="header-right">
          {/* Usando className="btn" conforme o CSS atualizado */}
          <button className="btn" aria-label="Ir para a página inicial">
            <FaHouse color='white' size={40} /> {/* Removido style={{ marginRight: 10 }} para CSS */}
          </button>
          <button className="btn" aria-label="Ir para o perfil do usuário">
            <FaRegUserCircle color='white' size={40} /> {/* Removido style={{ marginRight: 10 }} para CSS */}
          </button>
        </div>
      </header>

      {/* Main agora conterá a área do jogo com a imagem de fundo e os botões de nível */}
      <main className="main">
        {/* Botão de voltar - posicionado dentro do main, mas via absolute CSS */}
        <button className='btnVoltar' aria-label="Voltar para a página anterior">
          <GoArrowLeft color='green' size={40} />
        </button>

        {/* 2. Container dos botões de nível - PRECISA ESTAR AQUI FORA DE 'btns' */}
        {/* Este container será responsável por posicionar os botões sobre a imagem de fundo do .main */}
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

        {/* 3. Container dos botões "Próximo Nível" e "Salvar Progresso" - mantido separado */}
        <div className='btns'>
          <button type="button" className="btn-prox">Próximo Nível</button>
          <button type="button" className="btn-salvar">Salvar Progresso</button>
        </div>
      </main>
    </div>
  );
};

export default ProgressoDeNivel1;