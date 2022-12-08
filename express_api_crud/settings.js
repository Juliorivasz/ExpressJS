const express = require("express");
const userRoutes = require("./src/public/routes/users");
const caseSensitive = require("./src/public/routes/case-sensitive");
const patch = require("path");
const app = express();

// settings
// set() se le pasa dos parametros el primero es la variable a crear
//  el segundo parametro es el valor que tendra la variable creada
app.set("port", "3000");

// get() se le pasa un parametro que es la variable a utilizar
// userRoutes es un archivo ubicado en routes que contiene una funcion para obtener y enviar rutas
// el parametro que recibe es la app es decir express()
userRoutes(app);
// son modulos que vienen de express por el metodo Router
// uso middlewares para llamar el archivo ya que provienen de la app express()
app.use(caseSensitive);
// case sensitive routing es una variable de express que se puede modificar con set()
// es para que respete cuando se escribe una ruta en mayusculas o minusculas

app.set("case sensitive routing", true);

const route = patch.join(__dirname,'src/public/index.html');
// enviar archivos 
app.get("/", (req,res)=>{
    // usando sendFile puedo enviar archivos
    // necesita un path mas definido para funcionar
    res.sendFile(route);
})

app.listen(app.get("port"));
console.log("port is " + app.get("port"));

// orden del codigo tienen que estar:
// 1: settings
// 2: middlewares
// 3: routes
