'use strict'
const fetch = require('node-fetch');

const url = "https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes";


const getCliente = async () => {
  const resultado = await fetch(
    url
  );

  const clientes = await resultado.json();

  return clientes;
}


module.exports = {
    getCliente 
}