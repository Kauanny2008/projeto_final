const db = require('../database/conexao');

function listar(especialidade) {
  if (especialidade) return db.prepare('SELECT * FROM profissionais WHERE categoria = ? ORDER BY nome').all(especialidade);
  return db.prepare('SELECT * FROM profissionais ORDER BY nome').all();
}

module.exports = { listar };
