var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "k8sdeepakrajdb.cqzpdfyzcijo.ap-south-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "Admin123",
  database: "k8sapp"
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Database connected.");
});


// host     : "kubernetesuserdb.cqzpdfyzcijo.ap-south-1.rds.amazonaws.com",
  // user     : "admin",
  // password : "Admin1234",
  // port     : "3306",
  // database: 'kubernetesuserdb'
  // Heruko