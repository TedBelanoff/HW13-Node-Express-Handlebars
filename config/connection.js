// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
//Local
//  host: "localhost",
//  port: 3306,
//  user: "root",
//  password: "Welcome10",
//  database: "burger_db"

//Heroku
 HOST: "us-cdbr-east-06.cleardb.net",
 PORT: 5000,
 USER: "b832475d9bca44:a1049cc5",
 PASSWORD: "a1049cc5",
 DB: "heroku_a1be01af8d8b233"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
