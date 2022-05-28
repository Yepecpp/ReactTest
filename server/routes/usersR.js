const express = require("express");
const router = express.Router();
const { con } = require("../db");
const bycrypt = require("bcrypt");
module.exports.UserR = router;
router.use(express.json());
router.post("/", async (req, res) => {
  console.log(req.body);
  const { Username, PassW } = req.body;
  if (!Username || !PassW) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  con.query(
    `SELECT Username FROM Usuarios WHERE Username = '${Username}'`,
    (err, result) => {
      if (err) throw err;
      if (result.length == 0) {
        bycrypt.hash(PassW, 10, async (err, hash) => {
          if (err) throw err;
          con.query(
            `INSERT INTO Usuarios (Username,PassW) VALUES ('${Username}','${hash}')`,
            (err) => {
              if (err) throw err;
              res.status(201).send("Usuario creado");
            }
          );
        });
      } else {
        res.status(400).send({ error: "El usuario ya existe" });
      }
    }
  );
});

router.post("/login", async (req, res) => {
  const { Username, PassW } = req.body;
  if (!Username || !PassW) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  con.query(
    `SELECT * FROM Usuarios WHERE Username = '${Username}'`,
    (err, result) => {
      if (err) throw err;
      if (result.length == 0) {
        res.status(400).send({ error: "El usuario no existe" });
      } else {
        bycrypt.compare(PassW, result[0].PassW, async (err, result) => {
          if (err) throw err;
          if (result) {
            res.status(200).send({ message: "Usuario autenticado" });
          } else {
            res.status(400).send({ error: "Contraseña incorrecta" });
          }
        });
      }
    }
  );
});
