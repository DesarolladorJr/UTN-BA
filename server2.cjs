const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3004;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda_online",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Ruta para obtener los productos
app.get("/productos", (req, res) => {
  const query =
    "SELECT id, nombre, descripcion, precio, id_categoria, activo FROM productos WHERE activo = 1";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: err });
    }
    res.send(results);
  });
});

// Ruta para crear un nuevo producto
app.post("/productos", (req, res) => {
  const { nombre, descripcion, precio, id_categoria, activo } = req.body;
  const query =
    "INSERT INTO productos (nombre, descripcion, precio, id_categoria, activo) VALUES (?, ?, ?, ?, ?)";

  db.query(
    query,
    [nombre, descripcion, precio, id_categoria, activo],
    (err, result) => {
      if (err) {
        return res.status(500).send({ error: err });
      }
      res.send({ success: true, message: "Producto creado exitosamente" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
