import React, { useState } from 'react';
import './QuestaoControlada.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaLeftLong, FaHouse } from "react-icons/fa6";

function QuestaoAbertaEscrita() {
    // State to hold selected phrases for each part
    const [selectedParts, setSelectedParts] = useState([[], [], []]); // 3 parts
    const finalAnswer = selectedParts.flat().join(' '); // Join selected phrases for final answer

    const options = [
        ['(', '"','PRINT'], 
        ['"', 'É CHICO',')' , 'MEU NOME', ';'], 
    ];

    // Toggle selection of a phrase in a given part
    const toggleSelection = (partIndex, phrase) => {
        setSelectedParts(prev => {
            const newParts = prev.map(arr => [...arr]); // Shallow copy of arrays
            const idx = newParts[partIndex].indexOf(phrase);
            if (idx === -1) {
                // Not selected, add it
                newParts[partIndex].push(phrase);
            } else {
                // Already selected, remove it
                newParts[partIndex].splice(idx, 1);
            }
            return newParts;
        });
    };

    const handleSubmit = () => {
        alert(`Sua resposta: ${finalAnswer || '(nenhuma frase selecionada)'}`);
        // Here you can handle the submission logic, e.g., send to a server
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
                <h1>ATIVIDADE 2</h1>
                <div className="cardbody">
                    <h2> O PRINT é um comando de saída que tem a seguinte sintaxe: print(). Ex: print("Meus nome é Clara") </h2>
                </div>
                <div className='txtInfo'>
                    <h2>Como ficaria um comando print com o nome do Calango Chico?</h2>
                </div>

                <div className='Resposta'>
                    <h2>Resposta Selecionada: {finalAnswer}</h2>
                </div>
                <br></br>
                <div className='answer-selection'>
                    {options.map((optionSet, index) => (
                        <div key={index} className='option-group'>
                            {optionSet.map((option, idx) => {
                                const isSelected = selectedParts[index].includes(option);
                                return (
                                    <button 
                                        key={idx} 
                                        className={`option-button${isSelected ? ' selected' : ''}`} 
                                        onClick={() => toggleSelection(index, option)}
                                        aria-pressed={isSelected}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div>
                    <button className='BtnEnviar' type='button' onClick={handleSubmit}>Enviar</button>
                </div>
            </main>
        </div>
    );
}

export default QuestaoAbertaEscrita;
