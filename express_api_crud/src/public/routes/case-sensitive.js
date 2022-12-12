// en vez de usar funciones podemos hacer uso de Router
// es un metodo de express()

require("ejs");
const axios = require("axios");

const { Router } = require("express");
// es una funcion que debe ejecutarse
// lo que hace este metodo es adquirir
// se debe llamar la variable como router por convencion
const router = Router();

router.get("/case", (req, res) => {
  res.render("case");
});

// aplicando ejs vinculado al settings
router.all("/ejs", (req, res) => {
  // gracias a ejs podemos aplicar condigo de logica e introducirlo hacia el html
  const title = "Aplicando logica desde el backend y renderizarlo en el html";

  let isActive = false;
  // se le pasa como segundo parametro el objeto que queremos mostrar en el html
  // usando propiedad : valor, pero como tienen el mismo propiedad:valor se puede colocar solo el nombre
  res.render("index", { title, isActive });
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((respon)=>console.log(respon))

  res.render("posts", { posts: response.data });
});

module.exports = router;
