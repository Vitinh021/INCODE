const db = require('../config/db');

// Buscar todas as respostas
exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM respostas');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar resposta por ID
exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.query('SELECT * FROM respostas WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Resposta não encontrada' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar resposta por ID:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar respostas por usuário
exports.getByUsuario = async (req, res) => {
    try {
        const usuario_id = req.params.usuario_id;
        const [rows] = await db.query('SELECT * FROM respostas WHERE usuario_id = ?', [usuario_id]);
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar respostas por usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar respostas por questão
exports.getByQuestao = async (req, res) => {
    try {
        const questao_id = req.params.questao_id;
        const [rows] = await db.query('SELECT * FROM respostas WHERE questao_id = ?', [questao_id]);
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar respostas por questão:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Criar nova resposta
exports.create = async (req, res) => {
    try {
        const { usuario_id, questao_id, resposta, resultado } = req.body;
        const [result] = await db.query(
            'INSERT INTO respostas (usuario_id, questao_id, resposta, resultado) VALUES (?, ?, ?, ?)',
            [usuario_id, questao_id, resposta, resultado]
        );
        res.status(201).json({ mensagem: 'Resposta registrada com sucesso', id: result.insertId });
    } catch (error) {
        console.error('Erro ao registrar resposta:', error);
        res.status(500).json({ mensagem: 'Erro interno ao registrar resposta' });
    }
};

// Atualizar resposta
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario_id, questao_id, resposta, resultado } = req.body;
        const [result] = await db.query(
            'UPDATE respostas SET usuario_id = ?, questao_id = ?, resposta = ?, resultado = ? WHERE id = ?',
            [usuario_id, questao_id, resposta, resultado, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Resposta não encontrada' });
        }
        res.json({ mensagem: 'Resposta atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar resposta:', error);
        res.status(500).json({ mensagem: 'Erro interno ao atualizar resposta' });
    }
};

// Deletar resposta
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query(
            'DELETE FROM respostas WHERE id = ?',
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Resposta não encontrada' });
        }
        res.json({ mensagem: 'Resposta excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir resposta:', error);
        res.status(500).json({ mensagem: 'Erro interno ao excluir resposta' });
    }
};