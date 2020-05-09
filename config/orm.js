// Import connection.
var connection = require("../config/connection.js");

//Data treatment functions (used in Unit 13 Activity 17)
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// ORM object
var orm = {
//Select function (adapted from Unit 13 Exercise 17) 
  selectAll: function(tableInput, bb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connectionF.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      bb(result);
    });
  },
//Insert function (adapted from Unit 13 Exercise 17)
  insertOne: function(table, cols, vals, bb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

//Print full burger set
    console.log(queryString);

    connectionF.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      bb(result);
    });
  },

//Update function (adapted from Unit 13 Exercise 17)
  updateOne: function(table, objColVals, condition, bb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connectionF.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      bb(result);
    });
  },

//Delete function (adapted from Unit 13 Exercise 17)
  deleteOne: function(table, condition, bb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connectionF.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      bb(result);
    });
  }
};

// Export ORM (burger.js)
module.exports = orm