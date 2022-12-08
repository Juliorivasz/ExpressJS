const express = require('express');

const app = express();
// esta funcion se conoce como middleware ya que muestra la info de todo las paginas que recorre 
app.use((req,res,next)=>{
    console.log(`Route: ${req.url}, metodo: ${req.method}`);
    next();
})

app.get('/',(req,res)=>{
    res.send('<h1>bienvenido</h1>');
})

app.all('/perfil', (req,res)=>{
    res.send('<h1>perfil</h1>');
})

app.listen(3000);
console.log('deploy port 3000');