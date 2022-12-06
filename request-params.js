const express = require('express')

const app = express();

// para usar una ruta que cambia usamos /:nombre, ejemplo:
// params es el valor que se le pasa en el ultimo /params de una ruta
app.get('/:user',(req,res)=>{
    console.log(req.params.user)
    res.send(`hello ${req.params.user}`)
})
app.listen(3000)
console.log('server deployed 3000')