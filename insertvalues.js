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
    var sql = "INSERT INTO fashions (name, photo_link, collection_date, created_date) VALUES ('Triplets', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-viktor-rolf-statement-gowns-00-index-1548271984.jpg','2019-12-20','2019-12-31'),('Super kawia', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80','2019-12-20','2019-12-31')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("2 record inserted");
    });
    sql = "INSERT INTO news (title, photo_link, body, created_at) VALUES ('Triples','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80','Lorem imsdf jdsf dsff','2019-12-30')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
});