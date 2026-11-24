const eventoModel = require('../models/eventoModel');
const { enviarJson } = require('../utils/resposta');

function listar(req, res, { query }) {
  enviarJson(res, 200, eventoModel.listar(query.get('mes')));
}

module.exports = { listar };
