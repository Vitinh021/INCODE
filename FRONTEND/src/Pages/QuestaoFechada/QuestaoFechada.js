import React, { useState } from 'react';
import './QuestaoFechada.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaLeftLong, FaHouse } from "react-icons/fa6";

function QuestaoFechada() {
    const [feedback, setFeedback] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setFeedback('Parabéns, resposta CORRETA!');
        } else {
            setFeedback('Oxente, resposta ERRADA !');
        }
        setShowFeedback(true);
    };

    const handleCloseFeedback = () => {
        setShowFeedback(false);
    };

    return (
        <div className='perfilpage'>
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
            <button className='btn' aria-label='Botão de Voltar'>
                <FaLeftLong color='Green' size={60} style={{ marginLeft: 10 }} />
            </button>

            <main className="main">
                <h1>ATIVIDADE 3</h1>
                <div className="card">
                    <div className="card-body">
                        <h2> O PRINT é um comando de saída que tem a seguinte sintaxe: print(). Ex: print("Meu nome é Calango Chico")</h2>
                    </div>
                </div>
                <div className='txtInfo'>
                    <h2>Qual das opções converte corretamente uma entrada do usuário para número inteiro?</h2>
                </div>
                <div className='DivBtn'>
                    <button className='BtnResposta' type='button' onClick={() => handleAnswer(false)}> (A) str(input()) </button>
                    <button className='BtnResposta' type='button' onClick={() => handleAnswer(true)}> (B) int(input()) </button>
                    <button className='BtnResposta' type='button' onClick={() => handleAnswer(false)}> (C) input(int) </button>
                    <button className='BtnResposta' type='button' onClick={() => handleAnswer(false)}> (D) float(input()) </button>
                </div>
                <div>
                    <button className='BtnEnviar' type='submit' id='Enviar'> Enviar </button>
                </div>
            </main>

            {showFeedback && (
                <div className="feedback-card">
                    <div className="feedback-message">
                        <h2>{feedback}</h2>
                        <button className='btnProx' onClick={handleCloseFeedback}>Proxima</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuestaoFechada;
