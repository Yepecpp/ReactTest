const express = require("express");
const router = express.Router();
const { con } = require("../db");
module.exports.MessagesR = router;
router.use(express.json());
router.post("/", (req, res) => {
  console.log(req.body);
  const { MText, Sender, Receiver, MTime } = req.body;
  if (!MText || !Sender || !Receiver || !MTime) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  con.query(
    `select Id_U, Username from Usuarios where Username = '${Sender}' or Username='${Receiver}' `,
    (err, result) => {
      console.log(result);
      if (err) {
        res.status(500).send({ error: err });
      }
      if (result.length == 2) {
        const SenderId =
          result[0].Username == Sender ? result[0].Id_U : result[1].Id_U;
        const ReceiverId =
          result[0].Username == Receiver ? result[0].Id_U : result[1].Id_U;
        con.query(
          `INSERT INTO Mensajes (MText,SId_U,RId_U,MTime) VALUES ('${MText}','${SenderId}','${ReceiverId}','${MTime}')`,
          (err) => {
            if (err) {
              res.status(500).send({ error: err });
            }
            res.status(201).send({ message: "Mensaje enviado" });
          }
        );
      } else {
        res.status(400).send({ error: "Usuario destinatario no existe" });
      }
    }
  );
});
