const db = require('../config/db');

// Buscar todos os niveis
exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM niveis');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar Nivel por ID
exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.query('SELECT * FROM niveis WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Nivel não encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar nivel por ID:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Buscar nivel por titulo
exports.getByTitulo = async (req, res) => {
    try {
        const titulo = req.params.titulo;
        const [rows] = await db.query('SELECT * FROM niveis WHERE titulo = ?', [titulo]);
        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Nivel não encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar nivel por titulo:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

// Criar nova Nivel
exports.create = async (req, res) => {
    try {
        const { titulo, descricao} = req.body;

        const [result] = await db.query(
            'INSERT INTO niveis (titulo, descricao) VALUES (?, ?)',
            [titulo, descricao]
        );

        res.status(201).json({ mensagem: 'Nivel criado com sucesso' });

    } catch (error) {
        console.error('Erro ao criar nivel:', error);
        res.status(500).json({ mensagem: 'Erro interno ao criar nivel' });
    }
};

// Atualizar nivel
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao} = req.body;

        const [result] = await db.query(
            'UPDATE niveis SET titulo = ?, descricao = ? WHERE id = ?',
            [titulo, descricao,id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Nivel não encontrado' });
        }

        res.json({ mensagem: 'Nivel atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar nivel:', error);
        res.status(500).json({ mensagem: 'Erro interno ao atualizar nivel' });
    }
};

// Deletar Nivel
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM niveis WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Nivel não encontrado' });
        }

        res.json({ mensagem: 'Nivel excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir nivel:', error);
        res.status(500).json({ mensagem: 'Erro interno ao excluir nivel' });
    }
};
