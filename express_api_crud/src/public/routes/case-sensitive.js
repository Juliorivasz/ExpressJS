// en vez de usar funciones podemos hacer uso de Router
// es un metodo de express()

const { Router } = require("express");
// es una funcion que debe ejecutarse
// lo que hace este metodo es adquirir
// se debe llamar la variable como router por convencion
const router = Router();

router.get("/Probando", (req, res) => {
  res.send("probando case sensitive routing");
});

module.exports = router;
