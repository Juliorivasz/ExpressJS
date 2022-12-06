const express = require('express');
// estados 200 todo ok y muesta al cliente algo
// 204 todo ok y no muestra nada
// 304 todo ok --> investigar
// 404 no encuentra lo que se intenta buscar
// 500 error --> no recuerdo investigar

const app = express();

app.get('/', (req,res)=>{
    res.json({"name": "julio"})
})
app.get('/isAlive', (req,res)=>{
    // si quiero enviar solo el estado
    res.sendStatus(204)
})

app.listen(3000);
console.log('server active port', 3000)