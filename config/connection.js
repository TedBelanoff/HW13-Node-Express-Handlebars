// Set up MySQL connection.
var mysql = require("mysql");
var connection = []

if (process.env.CLEARDB_DATABASE_URL)
//Heroku connection
{connection=mysql.createPool(process.env.CLEARDB_DATABASE_URL)}
else {
connection = mysql.createPool({
//Local connection
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Welcome10",
  database: "burger_db"
});}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ORM Connection
module.exports = connection;
