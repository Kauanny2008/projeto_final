// Servidor da API. Uso: npm start   (http://localhost:3000/api/postos)
const http = require('http');
const { PORTA } = require('./config/ambiente');
const rotas = require('./routes');
const { enviarJson } = require('./utils/resposta');

const servidor = http.createServer((req, res) => {
  // libera o acesso do frontend (outra porta, ex.: Live Server)
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  const url = new URL(req.url, 'http://localhost');
  for (const [metodo, caminho, controller] of rotas) {
    const achou = url.pathname.match(caminho);
    if (req.method === metodo && achou) {
      try {
        return controller(req, res, { params: achou.slice(1), query: url.searchParams });
      } catch (erro) {
        console.error(erro);
        return enviarJson(res, 500, { erro: 'Erro interno no servidor' });
      }
    }
  }
  enviarJson(res, 404, { erro: 'Rota não encontrada' });
});

servidor.listen(PORTA, () => console.log('API rodando em http://localhost:' + PORTA + '/api/postos'));
