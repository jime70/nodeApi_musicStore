const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

//const app = express();
const appUsr = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

// Middlewares
//app.use(cors());
//app.use(express.json());

appUsr.use(cors());
appUsr.use(express.json());

// Rutas
//app.use("/api/guitarras", require("./routes/guitarra"));
appUsr.use("/api/usuarios", require("./routes/usuario"));

// Función para mostrar las URLs como enlaces en la consola
const showApiLinks = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(
    `- Guitarras (GET): \x1b[36mhttp://localhost:${port}/api/guitarras\x1b[0m`
  );
  console.log(
    `- Guitarras (POST): \x1b[36mhttp://localhost:${port}/api/guitarras\x1b[0m`
  );
  console.log(
    `- Guitarras (PUT): \x1b[36mhttp://localhost:${port}/api/guitarras/:id\x1b[0m`
  );
  console.log(
    `- Guitarras (DELETE): \x1b[36mhttp://localhost:${port}/api/guitarras/:id\x1b[0m`
  );
};

// Función para mostrar las URLs como enlaces en la consola
const showApiLinksUsr = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(
    `- Usuarios (GET): \x1b[36mhttp://localhost:${port}/api/usuarios\x1b[0m`
  );
  console.log(
    `- Usuarios (POST): \x1b[36mhttp://localhost:${port}/api/usuarios\x1b[0m`
  );
  console.log(
    `- Usuarios (PUT): \x1b[36mhttp://localhost:${port}/api/usuarios/:id\x1b[0m`
  );
  console.log(
    `- Usuarios (DELETE): \x1b[36mhttp://localhost:${port}/api/usuarios/:id\x1b[0m`
  );
};

// Iniciar el servidor y mostrar las rutas
appUsr.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  //showApiLinks(PORT);
  showApiLinksUsr(PORT);
});