var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var port = 4000
var app = express()

var mysql = require('mysql');
//database-tei holboh
var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "clothes"
});
con.getConnection(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Get All news
app.get('/news', (req, res, next) => {
  con.getConnection(function(err, connection) {
    connection.query("SELECT * FROM news", function (err, result, fields) {
      connection.release();
      if (err) throw err;
      console.log(result.length);
      res.send(JSON.stringify(result));
    });
  });
})


//Get all fashions
app.get('/fashions', (req, res, next) => {
  con.getConnection(function(err, connection) {
    connection.query("SELECT * FROM fashions", function (err, result, fields) {
      connection.release();
      if (err) throw err;
      console.log(result.length);
      res.send(JSON.stringify(result));
    });
  });
})
app.post('/news', (req, res, next) => {
  con.getConnection(function(err, connection) {
      connection.release();
      if (err) throw err;
      console.log(req.body);
      res.send('Amjilttai medeeg huleen awlaa');
  });
})

app.listen(port, function() {
  console.log('Server started on port ' + port)
})

