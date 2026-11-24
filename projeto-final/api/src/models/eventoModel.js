const db = require('../database/conexao');

// mes no formato aaaa-mm (ex.: 2026-10)
function listar(mes) {
  if (mes) return db.prepare('SELECT * FROM eventos WHERE data LIKE ? ORDER BY data').all(mes + '%');
  return db.prepare('SELECT * FROM eventos ORDER BY data').all();
}

module.exports = { listar };
