const express = require("express");
const path = require("path");
const app = express();

// configurar una carpeta para que se la principal es decir la
// que va a ser vista por el navegador
// dentro del metodo va el nombre de la carpeta

// tambien se puede hacer que solo pueda verse si visita la url indicada como primer parametro
// el archivo estatico siempre se coloca de ultimo para que pase primero por las rutas
// y si ninguna es la correcta tomara el archivo public
// express.static solo encuentra si el archivo esta en la raiz
// por eso se concateno la variable dirname que es la ruta con public para tomar la ruta completa
app.use("/public", express.static(path.join(__dirname, "public")));
app.listen(3000);
console.log("port " + 3000);
