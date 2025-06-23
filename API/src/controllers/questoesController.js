const db = require('../config/db');

// Buscar todas as questões
exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM questoes');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar questão por ID
exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.query('SELECT * FROM questoes WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Questão não encontrada' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar questão por ID:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar questões por nível
exports.getByNivel = async (req, res) => {
    try {
        const nivel_id = req.params.nivel_id;
        const [rows] = await db.query('SELECT * FROM questoes WHERE nivel_id = ?', [nivel_id]);
        res.json(rows);
    } catch (error) {
        console.error('Erro ao buscar questões por nível:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Criar nova questão
exports.create = async (req, res) => {
    try {
        const { nivel_id, tipo, texto_questao, resposta } = req.body;
        const [result] = await db.query(
            'INSERT INTO questoes (nivel_id, tipo, texto_questao, resposta) VALUES (?, ?, ?, ?)',
            [nivel_id, tipo, texto_questao, resposta]
        );
        res.status(201).json({ mensagem: 'Questão criada com sucesso', id: result.insertId });
    } catch (error) {
        console.error('Erro ao criar questão:', error);
        res.status(500).json({ mensagem: 'Erro interno ao criar questão' });
    }
};

// Atualizar questão
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nivel_id, tipo, texto_questao, resposta } = req.body;
        const [result] = await db.query(
            'UPDATE questoes SET nivel_id = ?, tipo = ?, texto_questao = ?, resposta = ? WHERE id = ?',
            [nivel_id, tipo, texto_questao, resposta, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Questão não encontrada' });
        }
        res.json({ mensagem: 'Questão atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar questão:', error);
        res.status(500).json({ mensagem: 'Erro interno ao atualizar questão' });
    }
};

// Deletar questão
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query(
            'DELETE FROM questoes WHERE id = ?',
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Questão não encontrada' });
        }
        res.json({ mensagem: 'Questão excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir questão:', error);
        res.status(500).json({ mensagem: 'Erro interno ao excluir questão' });
    }
};