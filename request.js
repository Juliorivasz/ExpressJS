const express = require('express');

const app = express();
// request esta dividido en 3 
// endpoint que es como la cabecera (ruta a sido visitada)
// header es como una nota adicional del dato que estoy enviando (que formtato tiene)
// body es el cuerpo el contendio de lo que se envia (que dato nos estan enviando)
// usamos express.text() para entender lo que se le envia al cliente
app.use(express.text())
app.use(express.json())
// urlencoded para formulario, extended es para notificar que solo va enviar texto o algo similar 
app.use(express.urlencoded({extended: false}))

app.post('/user', (req,res)=>{
    // recibe algo del cliente al servidor pero no puede entenderlo
    // usamos los express.metodo porque se necesita pasar antes 
    // para poder entenderlo y procesarlo
    console.log(req.body);
    res.send('nuevo usuario creado')
})

app.listen(4000);
console.log('server active in port', 4000);