import React from 'react';
import './QuestaoAbertaEscrita.css'
import { FaRegUserCircle } from 'react-icons/fa';
import { FaLeftLong, FaHouse } from "react-icons/fa6";


function QuestaoAbertaEscrita (){

     return(
    
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
            <FaLeftLong color='Green' size={60} style={{ marginLeft: 10}}/>
            </button>

          <main className="main">
            <h1>ATIVIDADE 1</h1>
            <div>
                <div className="cardbody">
                    <h2> O INPUT é um comando de entrada que tem a seguinte sintaxe : input(). Ex:input(“Qual seu nome?”) </h2>
                </div>
            </div>
            <div className='txtInfo'>
                 <h2>Agora refaça o código com a seguinte pergunta:  “Qual seu nome?”</h2>
            </div>
            <div>
                <input type='text' placeholder='Digite Aqui...'></input>
            </div>
            <div>
                 <button className='BtnEnviar' type='submit' id='Enviar'> Enviar </button>
            </div>
          </main>




        </div>

        )


}

export default QuestaoAbertaEscrita;