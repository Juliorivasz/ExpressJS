const express = require('express');

const app = express();
app.get('/', (req,res)=>{
    // root es para indicar la ruta completa de donde esta ubicado el archivo 
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})
// use es como la ultima ruta que recorre la app
app.use((req, res) => {
    res.status.sendFile('./db.json',{
        root: __dirname
    })
})
app.listen(3000);
console.log('server port', 3000)