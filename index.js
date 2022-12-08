const express = require('express');
const morgan = require('morgan');
const {readFile} = require('fs/promises');
const path = require('path');
const app = express();
app.use(express.json());
// es un npm para adelantar un middleware
app.use(morgan('dev'));
const pathJSON = path.join(__dirname,"./db.json");

async function readtext(){
     const readfile = await readFile(pathJSON,'utf-8');
    //  console.log(readfile);
     return readfile;
}

readtext()
.then(res=>data=res);



app.get('/1', (req,res)=>{
    // req.body se debe traducir con express.json() para entenderlo
    dataValue=JSON.parse(data);
    res.json(dataValue);
})

app.all('/', (req,res)=>{
    res.send('home');
})

app.listen(2000);
console.log('deployed port 2000'); 