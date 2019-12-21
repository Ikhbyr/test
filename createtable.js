var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clothes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE fashions(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),  photo_link TEXT, collection_date DATE, created_date DATE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" fashion Table created");
  });
  sql = "CREATE TABLE news(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255),  photo_link TEXT, body TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(" news Table created");
  });
});