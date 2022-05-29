var mysql = require('mysql');
const express=require('express');
const app=express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database:"minip"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

  app.listen(9000, () => {
    console.log("Server Started Successfully");
  })