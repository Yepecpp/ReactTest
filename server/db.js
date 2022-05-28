const mysql = require("mysql2");
// mysql conection
const conection = mysql.createConnection({
  user: "gregory",
  password: "elso",
  host: "localhost",
  database: "test",
});
// test conection
conection.connect((err) => {
  if (err) {
    console.log("error en la conexion");
    return;
  }
  console.log("conectado");
  conection.query("SELECT * FROM Messages", (err, rows) => {
    if (err) {
      console.log(err, query);
      return;
    }
    console.log(rows);
  });
});
module.exports.con = conection;
