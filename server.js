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
    var sql = `INSERT INTO Student (NAME, FATHER_NAME, SSLC_MARK, HSC_MARK,ACCOMODATION,COURSE,PRESENT_COUNT)
      VALUES ('${req.body.name}', '${req.body.fname}', '${req.body.sslc}', '${req.body.hsc}', '${req.body.am}','${req.body.course}','${req.body.pre_count}')`;

    con.query(sql, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post("/api/signup/", (req, res) => {
  console.log(req.body);

  var sql = `INSERT INTO USERS (NAME, MAIL, USERNAME, DESIGNATION,PWD)
      VALUES ('${req.body.name}', '${req.body.mail}', '${req.body.username}', '${req.body.designation}', '${req.body.pwd}')`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    const hasRows = result.affectedRows === 1;
    res.json({ success: hasRows  });
  });

});

app.post("/api/login", (req, res) => {
  console.log(req.body);

  var sql = 'SELECT * FROM USERS WHERE USERNAME="' + req.body.username + '" AND PWD="' + req.body.pwd + '"';
  con.query(sql, function (err, result) {
    if (err) throw err;
    const hasRows = result.length === 1;
    res.json({ success: hasRows  });
  });

});

app.listen(9000, () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Server Started Successfully");
  });
});
