import React from 'react';
import './ProgressoDeNivel3'; // Certifique-se de que o caminho está correto
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";

const ProgressoDeNivel3 = () => {

// 1. Defina a função handleNivelClick
    const handleNivelClick = (idDoNivel) => {
        alert(`Você clicou no Nível ${idDoNivel}!`);
        // Aqui você pode adicionar a lógica para navegar para a tela do nível
        // Por exemplo, usando React Router: navigate(`/nivel/${idDoNivel}`);
    };

    const niveis = [

        { id: 1, src: "/imagens/13.png", alt: 'Cenário do nível 1' },
        { id: 2, src: '/imagens/13.png', alt: 'Cenário do nível 2' },
        { id: 3, src: '/imagens/13.png', alt: 'Cenário do nível 3' },
        { id: 4, src: '/imagens/13.png', alt: 'Cenário do nível 4' },
        { id: 5, src: '/imagens/13.png', alt: 'Cenário do nível 5' },
      ];



  return (
    <div className="container" role="main" aria-label="Página Inicial">
      <header className="header">
        <div className="header-left">
          <img src="/imagens/19.png" width="180px" height="100px" alt="" className="d-inline-block align-top" />
        </div>
        <div className="header-right">
          <button className="btn" aria-label="Botão de Login">
            <FaHouse color='white' size={40} style={{ marginRight: 10 }} />
          </button>
          <button className="btn" aria-label="Botão de Login">
            <FaRegUserCircle color='white' size={40} style={{ marginRight: 10 }} />
          </button>
        </div>
      </header>

      <main className="main" >         
        <div>
          <button className='btnVoltar'>
            <GoArrowLeft color='green' size={40} style={{ marginRight: 10 }} />
          </button>
        </div>

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

        <div className='btns'>
          <button type="button" className="btn-prox">Proximo nivel</button>
          <button type="button" className="btn-salvar">Salvar progresso</button>
        </div>
      </main>
    </div>
  );
};

export default ProgressoDeNivel3;
