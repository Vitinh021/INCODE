import './Cadastro.css';
import React from 'react';
//import { MdAccessible, MdAccountBox, MdExitToApp, MdHome, MdLogin, MdPerson, MdPersonAdd } from 'react-icons/md';
//import { IoMdTrash } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";


function Cadastro() {
  const avatares = [
    { id: 1, src: "/imagens/calango.jpg" , alt: 'Calango nordestino' },
    { id: 2, src: '/imagens/calanga.jpg', alt: 'Calanga nordestina' },
    { id: 3, src: '/imagens/passaro.jpg', alt: 'Pássaro' },
    { id: 4, src: '/imagens/passara.jpg', alt: 'Pássara' },
  ];

  const handleAvatarClick = (avatarId) => {
      console.log(`Avatar ${avatarId} selecionado!`);
  };

  return (
    <div className='page-wrapper'>
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

      
        <div className='loginpage-content'>
        <div className='conteiner'>
          <form>
            <h1>Cadastro Cacthon</h1>
            <h3>Registre-se para eternizar cada momento desta nova jornada</h3>

            <label htmlFor='nomeInput'>Nome:</label>
            <input name='nome' type='text' placeholder='Digite seu nome completo...' id='nomeInput' />

            <label htmlFor="dataNascimentoInput">Data de nascimento:</label>
            <input name='idade' type='text' placeholder='ex. 01/05/2008' id='dataNascimentoInput' />

            <label htmlFor="emailInput">E-mail:</label>
            <input name='email' type='email' placeholder='ex. calangochico@gmail.com' id='emailInput' />

            <label htmlFor="usuarioInput">Nome de usuário:</label>
            <input name='usuario' type='text' placeholder='chico_da_programacao' id='usuarioInput' />

            <label htmlFor="senhaInput">Senha:</label>
            <input name='senha' type='password' placeholder='Escolha uma senha forte...' id='senhaInput' />

            <div className='avatar-selection'>
              <label>Escolha seu avatar:</label>
              <div className='avatar-options'>
                {avatares.map(avatar => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => handleAvatarClick(avatar.id)}
                    className="avatar-button"
                  >
                    <img src={avatar.src} alt={avatar.alt} />
                  </button>
                ))}
              </div>
            </div>

            <button type='submit' id='cadastro'>CADASTRAR</button>

          </form> 

          <div className='divparalogar'>
          <h2>Já sou um Cacthoniano!</h2>
          <h3>Login</h3>
            <button type='submit' id='cadastro'>Login</button>
        </div>
        </div> 
      </div> 


      
    </div> 
  );
}

export default Cadastro;