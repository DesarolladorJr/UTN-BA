import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear la aplicación Express
const app = express();
const port = 3000;

// Ruta a la carpeta 'dist' en el directorio raíz del proyecto
const distPath = path.join(__dirname, "../dist");

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(distPath));

// Ruta principal que sirve el archivo index.html de la carpeta 'dist'
app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
