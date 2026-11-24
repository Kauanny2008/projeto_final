// Apaga o banco e cria de novo com as tabelas e os dados de database/banco.sql
// Uso: npm run iniciar-banco
const fs = require('fs');
const { CAMINHO_BANCO } = require('./src/config/ambiente');

fs.rmSync(CAMINHO_BANCO, { force: true });
const db = require('./src/database/conexao');

for (const tabela of ['postos', 'campanhas', 'calendario_vacinal', 'historico_vacinal', 'profissionais', 'eventos']) {
  const { total } = db.prepare(`SELECT COUNT(*) AS total FROM ${tabela}`).get();
  console.log(tabela.padEnd(20), total, 'registros');
}
