const express = require('express');
const app = express();

app.use(express.static('images')); // Defina o diretório onde as imagens estão armazenadas

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
