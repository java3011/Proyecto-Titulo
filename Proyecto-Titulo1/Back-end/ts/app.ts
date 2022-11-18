const express = require('express')
const app = express();
const bodyParser = require('body-parser');

//mysql
const mysql=require("mysql");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '3011050899',
    port:  3306,
    database : 'cmd'
  });

  connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
   
    console.log('Conexión establecida' + connection.threadId);
  });


// create application/json parser
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}

app.listen(configuracion, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})