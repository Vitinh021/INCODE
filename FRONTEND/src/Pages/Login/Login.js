import './Login.css'
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";

function Login () {

     return (
        <div className='Login'>
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

        <main className="main">
          <div className='conteiner'>
            <form>
              <h1>Login Cacthon</h1>
              <label htmlFor="emailInput">E-mail:</label>
              <input name='email' type='email' placeholder='ex. calangochico@gmail.com' id='emailInput' />
              <label htmlFor="senhaInput">Senha:</label>
              <input name='senha' type='password' placeholder='Insira sua senha...' id='senhaInput' />
            </form>
            <div className='DivBtn'>
              <button className='BtnLogin' type='submit' id='login'>Entrar</button>
            </div>
            <h3>Não Possui Cadastro?</h3>
            <button className='BtnCadastro' type='submit' id='login'> Cadastrar </button>
          </div>

        </main>

        </div> 
      );





}


export default Login;