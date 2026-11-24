# Saúde Acessível — Barra do Garças/MT

Guia público das unidades de saúde da cidade: postos, vacinação, profissionais e calendário.

## Estrutura
    api/        servidor e API (Node.js)
      src/        config/, controllers/, models/, routes/, database/, utils/, server.js
      iniciar-banco.js, package.json, package-lock.json, .env.example
    database/   banco.sql (tabelas e registros em SQL) e dataset/ (CSV)
    docs/       requisitos, banco de dados e API
    frontend/   index.html, css/, js/   (interface do site)

## Como ver o site
Abra a pasta no VS Code, clique com o botão direito em `frontend/index.html`
e escolha **Open with Live Server**. Não precisa instalar nada.

## Como rodar a API (opcional)
Requer Node.js 22.5 ou mais novo. Não precisa de `npm install`.

    cd api
    npm run iniciar-banco     # cria o banco a partir de database/banco.sql
    npm start                 # http://localhost:3000/api/postos

Documentação completa em `docs/`.
