const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const niveisController = require('../controllers/niveisController');
const questoesController = require('../controllers/questoesController');
const respostasController = require('../controllers/respostasController');

// Rotas usuarios
router.get('/usuarios', userController.getAll);
router.get('/usuarios/id/:id', userController.getById);
router.get('/usuarios/apelido/:apelido', userController.getByNickName);
router.post('/usuarios', userController.create);
router.put('/usuarios/:id', userController.update);
router.delete('/usuarios/:id', userController.delete);

// Rotas niveis
router.get('/niveis',niveisController.getAll);
router.get('/niveis/id/:id',niveisController.getById);
router.get('/niveis/titulo/:titulo',niveisController.getByTitulo);
router.post('/niveis',niveisController.create);
router.put('/niveis/:id',niveisController.update);
router.delete('/niveis/:id',niveisController.delete);

// Rotas questoes
router.get('/questoes',questoesController.getAll);
router.get('/questoes/id/:id',questoesController.getById);
router.get('/questoes/nivel/:nivel_id', questoesController.getByNivel);
router.post('/questoes',questoesController.create);
router.put('/questoes/:id',questoesController.update);
router.delete('/questoes/:id',questoesController.delete);

// Rotas respostas
router.get('/respostas',respostasController.getAll);
router.get('/respostas/id/:id',respostasController.getById);
router.get('/respostas/usuario/:usuario_id',respostasController.getByUsuario);
router.get('/respostas/questao/:questao_id',respostasController.getByQuestao);
router.post('/respostas',respostasController.create);
router.put('/respostas/:id',respostasController.update);
router.delete('/respostas/:id',respostasController.delete);

module.exports = router;
