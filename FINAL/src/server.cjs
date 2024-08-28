const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3003;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "base1",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Ruta para manejar el login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM tabla1 WHERE username = ? AND password = ?";

  db.query(query, [username, password], (err, result) => {
    if (err) {
      return res.status(500).send({ error: err });
    }
    if (result.length > 0) {
      res.send({ success: true, message: "Login successful" });
    } else {
      res.send({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
