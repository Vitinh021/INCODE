const db = require('../config/db');

exports.getAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar usuário por ID:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

exports.getByNickName = async (req, res) => {
    try {
        const apelido = req.params.apelido;
        const [rows] = await db.query('SELECT * FROM usuarios WHERE apelido = ?', [apelido]);
        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar usuário por apelido:', error);
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

exports.create = async (req, res) => {
    try {
        const { nome, apelido, senha, idade } = req.body;

        const [result] = await db.query(
            'INSERT INTO usuarios (nome, apelido, senha, idade, criado_em) VALUES (?, ?, ?, ?, NOW())',
            [nome, apelido, senha, idade]
        );

        res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
        //res.status(201).json({ id: result.insertId, apelido });

    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno ao criar usuário' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, apelido, senha, idade } = req.body;

        const [result] = await db.query(
            'UPDATE usuarios SET nome = ?, apelido = ?, senha = ?, idade = ? WHERE id = ?',
            [nome, apelido, senha, idade, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.json({ mensagem: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno ao atualizar usuário' });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            'DELETE FROM usuarios WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        res.json({ mensagem: 'Usuário excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ mensagem: 'Erro interno ao excluir usuário' });
    }
};
