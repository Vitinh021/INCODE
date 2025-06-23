// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';

// import HomePage from './Pages/Home/HomePage';
// import Cadastro from './Pages/Cadastro/Cadastro';
// //import PerfilPage from './Pages/Perfil/PerfilPage';
// //import ProgressoDeNiveis from './Pages/Niveis/ProgressoDeNiveis';
// //import ProgressoNivel1 from './Pages/Niveis/ProgressoNivel1';
// //import ProgressoNivel2 from './Pages/Niveis/ProgressoNivel2';
// //import ProgressoNivel3 from './Pages/Niveis/ProgressoNivel3';
// //import ProgressoNivel4 from './Pages/Niveis/ProgressoNivel4';
// //import Login from './Pages/Login/Login';

// //import QuestaoAbertaEscrita from './Pages/QuestaoAbertaEscrita/QuestaoAbertaEscrita';
// //import QuestaoControlada from './Pages/QuestaoControlada/QuestaoControlada';
// import QuestaoFechada from './Pages/QuestaoFechada/QuestaoFechada';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         {/* Exemplo de rotas comentadas que você pode ativar */}
//         {/* <Route path="/cadastro" element={<Cadastro />} /> */}
//         {/* <Route path="/perfil" element={<PerfilPage />} /> */}
//         {/* <Route path="/progresso" element={<ProgressoDeNiveis />} /> */}
//         {/* <Route path="/progresso/nivel1" element={<ProgressoNivel1 />} /> */}
//         {/* <Route path="/progresso/nivel2" element={<ProgressoNivel2 />} /> */}
//         {/* <Route path="/progresso/nivel3" element={<ProgressoNivel3 />} /> */}
//         {/* <Route path="/progresso/nivel4" element={<ProgressoNivel4 />} /> */}
//         {/* <Route path="/login" element={<Login />} /> */}

//         {/* Questões */}
//         {/* <Route path="/questao/aberta" element={<QuestaoAbertaEscrita />} /> */}
//         {/* <Route path="/questao/controlada" element={<QuestaoControlada />} /> */}
//         <Route path="/questao/fechada" element={<QuestaoFechada />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Cadastro from './Pages/Cadastro/Cadastro';
import HomePage from './Pages/Home/HomePage';
//import PerfilPage from './Pages/Perfil/PerfilPage';
//import ProgressoDeNiveis from './Pages/Niveis/ProgressoDeNiveis';
//import ProgressoNivel1 from './Pages/Niveis/ProgressoNivel1';
//import ProgressoNivel2 from './Pages/Niveis/ProgressoNivel2';
//import ProgressoNivel3 from './Pages/Niveis/ProgressoNivel3';
//import ProgressoNivel4 from './Pages/Niveis/ProgressoNivel4';
//import Login from './Pages/Login/Login';

//import QuestaoAbertaEscrita from './Pages/QuestaoAbertaEscrita/QuestaoAbertaEscrita';
//import QuestaoControlada from './Pages/QuestaoControlada/QuestaoControlada';
import QuestaoFechada from './Pages/QuestaoFechada/QuestaoFechada';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage /> {/* Renderize o componente Login aqui */}
  </React.StrictMode>
);


reportWebVitals();