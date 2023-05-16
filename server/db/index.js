var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : "kubernetesuserdb.cqzpdfyzcijo.ap-south-1.rds.amazonaws.com",
  user     : "admin",
  password : "Admin1234",
  port     : "3306",
  database: 'kubernetesuserdb'
});

connection.connect();
