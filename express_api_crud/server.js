const express = require("express");
const morgan = require("morgan");

const app = express();

let products = [
  {
    Id: 1,
    name: "julio",
    old: "22 years",
  },
];

app.use(morgan("dev"));
app.use(express.json());

// obtener info
app.get("/products", (req, res) => {
  console.log(...products);
  res.json(products);
});

// modificar info
app.post("/products", (req, res) => {
  const newProducts = { Id: products.length + 1, ...req.body };
  products.push(newProducts);
  res.send("creando products");
});

// actualizar arreglo
app.put("/products", (req, res) => {
  const newData = req.body;
  const productFound = products.find((e) => e.Id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "product not found",
    });
  }

  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );
  res.json({
    message: "product updated sucessfully",
  });
});

// eliminar un producto del array
app.delete("/products/:id", (req, res) => {
  const productFound = products.find((e) => e.Id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "product not found",
    });
  }

  products = products.filter((p) => p.Id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  // array.find() es para buscar se coloca una funcion parecida a un foreach o map
  // req.params es un string
  const productFound = products.find((e) => e.Id === parseInt(req.params.id));

  if (!productFound) {
    return res.status(404).json({
      message: "product not found",
    });
  }
  res.send(productFound);
});

app.listen(3000);
console.log(`http://localhost:3000/`);
