const express = require('express');

const app = express();
// queries /ruta? o tambien llamada consulta
// ejemplo /ruta?variable=valor&otraVariable=valor
// & significa and
// para leer las queries es request.query
// para acceder al valor request.query.propiedad
