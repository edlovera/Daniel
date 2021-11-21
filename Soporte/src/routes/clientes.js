'use strict'
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const { getCliente } = require('../services/clientesServices');




router.get('/', async (req, res) => {


    const clientes = await getCliente();
  
    res.send(clientes);

});

router.get('/:id', async (req, res) => {

    const { id } = req.params;
    const clientes = await getCliente();
    
    const cliente = clientes.filter(cliente => cliente.id == id);
    res.send(cliente);
    
    });
    









module.exports = router;