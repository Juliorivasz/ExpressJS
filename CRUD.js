const express = require('express');

const app = express();

app.get('/products', (req,res)=>{
    res.send('lista de productos')
})
app.post('/products', (req,res)=>{
    res.send('creando productos')
})
app.put('/products', (req,res)=>{
    res.send('actualizando productos')
})
app.patch('/products', (req,res)=>{
    res.send('actualizando una parte producto')
})
app.delete('/products', (req,res)=>{
    res.send('eliminando productos')
})

app.listen(3000);
console.log('puerto 3000 abierto')