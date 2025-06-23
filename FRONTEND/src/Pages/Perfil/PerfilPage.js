import React from 'react';
import './Perfil.css'
import {  MdPerson } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";

function PerfilPage () {

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

      <main className="main">
        <div className='info'>
          <h1><button className="btn"><MdPerson size={80}/></button> Nome Sobrenome</h1>
          <h2 className='org2'>Idade</h2>
          <h3 className='org3'>Nivel</h3>
        </div>

        <div className="card">
          <div className="card-body">
            <h3>Senha:</h3>
            <h3>Usuario:</h3>
            <h3>Email:</h3>
          </div>
        </div>

        <div >
          <button type="button" className="cardbtn">Sair da conta <IoMdLogOut size={25} color='red'/></button>
        </div>


        <div >
          <button type="button" className="btnexcluir">Excluir conta <RiDeleteBinLine size={25} color='red'/></button>
        </div>
      </main>
    </div>
    )

}


export default PerfilPage;
