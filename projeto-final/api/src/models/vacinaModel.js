const db = require('../database/conexao');

const calendario = () => db.prepare('SELECT * FROM calendario_vacinal ORDER BY id').all();
const historico = () => db.prepare('SELECT * FROM historico_vacinal ORDER BY id').all();

module.exports = { calendario, historico };
