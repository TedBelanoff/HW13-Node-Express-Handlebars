//Require Express
var express = require("express");

//Specify PORT
var PORT = process.env.PORT || 8080;

//Express Permissions/folders

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import controller
var routes = require("./controllers/burgersController.js");

app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
