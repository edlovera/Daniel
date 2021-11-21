'use strict'
const express = require('express');
const cliente = require('./routes/clientes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/clientes', cliente);

app.listen(PORT, () => {
    console.log(`Escuchando por el puerto ${PORT}`);
});