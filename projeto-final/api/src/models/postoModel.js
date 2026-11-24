const db = require('../database/conexao');

const SELECT = `SELECT p.*, (SELECT group_concat(nome, ', ') FROM posto_servicos s WHERE s.posto_id = p.id) AS servicos FROM postos p`;

function listar(status) {
  if (status) return db.prepare(SELECT + ' WHERE p.status = ? ORDER BY p.id').all(status);
  return db.prepare(SELECT + ' ORDER BY p.id').all();
}

function buscarPorId(id) {
  return db.prepare(SELECT + ' WHERE p.id = ?').get(id);
}

module.exports = { listar, buscarPorId };
