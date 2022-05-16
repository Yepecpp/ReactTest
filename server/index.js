//#region Consts 
const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.PORT || 1434;
const mysql = require('mysql2');
const { json, send } = require('express/lib/response');
const ServerLocation = 'http://localhost:'+Port;
app.use(cors(
  {origin:"*"}));
//#endregion
// mysql conection

const conection = mysql.createConnection({
  user:'gregory',
  password:'elso',
  host:'localhost',
  database:'test'
});
// test conection
conection.connect((err)=>{ 
  if (err) {
  console.log('error en la conexion');
  return;
}
  console.log('conectado');
}); 
//Routes
app.listen(Port, () => {
    console.log(`Server is running on ${ServerLocation}`);
});
//app use templates
app.get('/', (req, res)=> {
  console.log('peticion get en /');
  var query =  'SELECT * FROM Messages';
  console.log(query);
  conection.query(query,(err,rows)=>{
    if (err) {console.log(err,query);
      res.status(500).send({error: err});
      return;
      }res.header('Access-Control-Allow-Private-Network').type('json').send(rows);
  });
}
);
function isNumber(n){
  return Number(n)===n;
}
app.get('/:id', (req, res)=> {
  console.log('peticion get en /');
  if (!isNumber(req.params.id)) {
    res.status(500).send('id debe ser un numero');
    return;
  }

  var query = req.params.id==0? 'SELECT * FROM Messages':`SELECT * FROM Messages WHERE id = ${req.params.id}`;
  console.log(req.params.id); console.log(query);
  conection.query(query,(err,rows)=>{
    if (err) {console.log(err,query);
      res.status(500).send({error: err});
      return;
      }
    res.type('json').send(rows);
  });
}
); 

app.use(express.json());

app.put('/',(req,res)=>{
  console.log('peticion put en /');
  const {Id,
    Sender,
    Reciver,
    MText} = req.body;
  var query = `update Messages set Sender = '${Sender}', Reciver = '${Reciver}', MText = '${MText}' where Id = ${Id}`;
  console.log(query);
  conection.query(query,(err,rows)=>{
    if (err) console.log(err);
    res.send({
      message: 'Message updated successfully'
    });
  });
}
);
app.post('/', (req, res)=> {
  console.log('peticion post en /users');
  const {
    Sender,
    Reciver,
    MText} = req.body;
  var query = `INSERT INTO Messages VALUES (null, '${Sender}', '${Reciver}', '${MText}')`
  console.log(query);
  conection.query(query,(err, rows)=>{
    if (err) {console.log(err,query);
    res.status(500).send({error: err});
    return;
    }
    res.send({
      Id: rows.insertId,
      Sender: Sender,
      Reciver: Reciver,
      MText: MText
    });
  });
}
); 
//default 404 page
app.use( (req, res) => {
  console.log('Peticion en 404');
  console.log(req.url);
  res.status(404).send('404'); 
}) // 404 not found  when the page request doesnt exist