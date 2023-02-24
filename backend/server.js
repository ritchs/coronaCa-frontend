const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql')
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
  host: 'mysql-112553-0.cloudclusters.net',
  port:19726,
  user: 'admin',
  password: 'zFLukkOr',
  database: 'eleme'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
 
//add new user
app.post('/store-data',(req, res) => {
  let data = {name: req.body.name,phone:req.body.phone,email:req.body.email};
  let sql = "INSERT INTO agency SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
app.listen(3005, () => {
  console.log("Server running successfully on 3005");
});