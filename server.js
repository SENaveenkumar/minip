const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "minip",
});

const app = express();

app.use(bodyParser.json());

app.use(express.static("client"));

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/student", (req, res) => {
  console.log(req.body);
  con.connect(function (err) {
    if (err) throw err;
    var sql = `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
      VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway')`;

    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.listen(9000, () => {
  console.log("Server Started Successfully");
});
