const express = require("express");
const app = express();
const routes = require("./gpt-implementation/routes");

// Ruta de ejemplo
app.use("/", routes);

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express ejecutándose en http://localhost:${port}`);
});
