//#region Consts
const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 1434;
const mysql = require("mysql2");
const ServerLocation = "http://localhost:" + Port;
const { apirouter } = require("./routes/api");
console.clear();
//Routes
app.use(cors());
app.use("/api", apirouter);
app.listen(Port, () => {
  console.log(`Server is running on ${ServerLocation}`);
});
//default 404 page
app.use((req, res) => {
  console.log("Peticion en 404");
  console.log(req.url);
  res.status(404).send("404");
}); // 404 not found  when the page request doesnt exist
