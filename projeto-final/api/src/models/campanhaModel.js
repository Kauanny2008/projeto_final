const db = require('../database/conexao');

function listar() {
  return db.prepare('SELECT * FROM campanhas ORDER BY id').all();
}

module.exports = { listar };
